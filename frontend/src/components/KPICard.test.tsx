import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import KPICard from './KPICard';

describe('KPICard', () => {
    it('renders title, value, and subtitle', () => {
        render(<KPICard title="MTTR" value="45.5" subtitle="Mean Time to Resolve" />);
        expect(screen.getByText('MTTR')).toBeInTheDocument();
        expect(screen.getByText('45.5')).toBeInTheDocument();
        expect(screen.getByText('Mean Time to Resolve')).toBeInTheDocument();
    });
});
