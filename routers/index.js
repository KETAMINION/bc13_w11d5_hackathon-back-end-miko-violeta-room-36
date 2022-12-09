import express from 'express';
const router = express.Router();
import { getYoga, searchYogaById } from '../models/index.js';

router.get('/', async function (req, res) {
  const result = await getYoga();
  return res.json({ success: true, payload: result });
});

router.get('/:id', async function (req, res) {
  const result = await searchYogaById(req.params.id);
  return res.json({ success: true, payload: result });
});

export default router;
