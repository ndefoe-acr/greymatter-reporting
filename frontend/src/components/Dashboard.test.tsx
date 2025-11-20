import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
    it('renders dashboard title and MTTR card', () => {
        render(<Dashboard />);
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
        expect(screen.getByText('MTTR')).toBeInTheDocument();
        expect(screen.getByText('Mean Time to Resolve')).toBeInTheDocument();
    });
});
