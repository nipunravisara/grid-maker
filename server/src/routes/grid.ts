import express from 'express';
import { createGrid, getGrids } from '../controllers/grid';

const router = express.Router();

router.get('/', getGrids);
router.post('/', createGrid);

export default router;
