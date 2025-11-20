import express from 'express';
import cors from 'cors';
import { getAllIncidents } from './services/incidentService.js';
import statsRouter from './routes/stats.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/incidents', async (req, res) => {
    const incidents = await getAllIncidents();
    res.json(incidents);
});

app.use('/api/stats', statsRouter);

export default app;
