import React, { useEffect, useState } from 'react';
import { Grid, Typography, CircularProgress, Alert } from '@mui/material';
import Layout from './Layout';
import KPICard from './KPICard';
import { fetchKPIs, type KPIData } from '../services/api';

const Dashboard: React.FC = () => {
    const [kpiData, setKpiData] = useState<KPIData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchKPIs();
                setKpiData(data);
            } catch (err) {
                setError('Failed to load KPI data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    return (
        <Layout>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Dashboard
                    </Typography>
                </Grid>
                {loading && (
                    <Grid item xs={12}>
                        <CircularProgress />
                    </Grid>
                )}
                {error && (
                    <Grid item xs={12}>
                        <Alert severity="error">{error}</Alert>
                    </Grid>
                )}
                {kpiData && (
                    <>
                        <Grid item xs={12} md={4}>
                            <KPICard
                                title="MTTR"
                                value={kpiData.mttr.toFixed(2)}
                                subtitle="Mean Time to Resolve (minutes)"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <KPICard
                                title="MTTA"
                                value={kpiData.mtta.toFixed(2)}
                                subtitle="Mean Time to Acknowledge (minutes)"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <KPICard
                                title="Open Cases"
                                value={kpiData.openCases}
                                subtitle="Currently Active Incidents"
                            />
                        </Grid>
                    </>
                )}
            </Grid>
        </Layout>
    );
};

export default Dashboard;
