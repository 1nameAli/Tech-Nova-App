import express from "express";
import { Position } from "../models/position.model.js";
export const positionController = async (req, res) => {
  let allPositions = await Position.find({});
  console.log(allPositions);

  res.json(allPositions);
};
