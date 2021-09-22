import express from 'express';
import mongoose from 'mongoose';
import Grid from '../models/grid';

export const getGrids = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const Grids = await Grid.find();
    res.status(200).json(Grids);
  } catch (error) {
    res.status(404).json({ message: error.message });
    return;
  }
};

export const createGrid = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const GridData = req.body;
  const newGrid = new Grid(GridData);

  try {
    const createdGrid = newGrid.save();
    res.status(201).json(createdGrid);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
