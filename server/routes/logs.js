import express from 'express';
import { getLogs, createLog, updateLog, deleteLog, likeLog } from '../controllers/logs.js';

const router = express.Router();

// The methods must be get, post, patch, delete
router.get('/', getLogs);
router.post('/', createLog);
router.patch('/:id', updateLog);
router.delete('/:id', deleteLog);
router.patch('/:id/likeLog', likeLog);

export default router;