import request from 'supertest';
import app from '../src/app';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../src/services/incidentService', () => ({
    getAllIncidents: vi.fn().mockResolvedValue([{ id: '123', title: 'Test' }]),
}));

vi.mock('../src/services/statsService', () => ({
    getMTTR: vi.fn().mockResolvedValue(90),
}));

describe('API Endpoints', () => {
    it('GET /api/incidents should return list of incidents', async () => {
        const res = await request(app).get('/api/incidents');
        expect(res.status).toBe(200);
        expect(res.body).toEqual([{ id: '123', title: 'Test' }]);
    });

    it('GET /api/stats/kpi should return metrics', async () => {
        const res = await request(app).get('/api/stats/kpi');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('mttr', 90);
    });
});
