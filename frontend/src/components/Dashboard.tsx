import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import Layout from './Layout';

const Dashboard: React.FC = () => {
    return (
        <Layout>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Dashboard
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
                        <Typography variant="h6" color="primary" gutterBottom>
                            MTTR
                        </Typography>
                        <Typography component="p" variant="h3">
                            --
                        </Typography>
                        <Typography color="text.secondary" sx={{ flex: 1 }}>
                            Mean Time to Resolve
                        </Typography>
                    </Paper>
                </Grid>
                {/* More cards will be added here */}
            </Grid>
        </Layout>
    );
};

export default Dashboard;
