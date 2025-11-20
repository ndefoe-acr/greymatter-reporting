import { describe, it, expect, vi } from 'vitest';
import { getMTTR } from '../src/services/statsService';

const mocks = vi.hoisted(() => {
    return {
        findMany: vi.fn(),
    };
});

vi.mock('@prisma/client', () => {
    return {
        PrismaClient: class {
            incident = {
                findMany: mocks.findMany,
            };
        },
    };
});

describe('StatsService', () => {
    it('should calculate average MTTR', async () => {
        mocks.findMany.mockResolvedValue([
            { created_at: new Date('2023-01-01T10:00:00Z'), closed_at: new Date('2023-01-01T11:00:00Z') }, // 60 mins
            { created_at: new Date('2023-01-01T10:00:00Z'), closed_at: new Date('2023-01-01T12:00:00Z') }, // 120 mins
        ]);

        const mttr = await getMTTR();
        expect(mttr).toBe(90); // Average of 60 and 120 minutes
    });
});
