import express from "express"
import { Holding } from "../models/holding.model.js";

export const holdingController= async (req, res) => {
  let allHoldings = await Holding.find({});
  console.log(allHoldings);

  res.json(allHoldings);
};