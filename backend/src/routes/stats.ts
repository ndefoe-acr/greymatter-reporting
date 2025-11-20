import { Router } from 'express';
import { getMTTR } from '../services/statsService.js';

const router = Router();

router.get('/kpi', async (req, res) => {
    const mttr = await getMTTR();
    res.json({ mttr, mtta: 0, openCases: 0 });
});

export default router;
