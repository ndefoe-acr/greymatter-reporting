import React from 'react';
import { Paper, Typography } from '@mui/material';

interface KPICardProps {
    title: string;
    value: string | number;
    subtitle: string;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, subtitle }) => {
    return (
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
            <Typography variant="h6" color="primary" gutterBottom>
                {title}
            </Typography>
            <Typography component="p" variant="h3">
                {value}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                {subtitle}
            </Typography>
        </Paper>
    );
};

export default KPICard;
