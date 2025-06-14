import express from "express";
import { holdingController } from "../controllers/holdingController.js";

 const router = express.Router();
 router.get("/allHoldings", holdingController);
export default router;