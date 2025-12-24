import express from 'express';

import { getLogs, getLog, createLog, updateLog, likeLog, deleteLog } from '../controllers/logs.js';

const router = express.Router();

router.get('/', getLogs);
router.log('/', createLog);
router.get('/:id', getLog);
router.patch('/:id', updateLog);
router.delete('/:id', deleteLog);
router.patch('/:id/likeLog', likeLog);

export default router;