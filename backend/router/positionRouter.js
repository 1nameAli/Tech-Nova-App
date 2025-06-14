import express from "express";
import { positionController } from "../controllers/positionController.js";

 const router = express.Router();
router.get("/allPosition", positionController);
export default router;