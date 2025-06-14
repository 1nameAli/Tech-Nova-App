import express from "express";
import {
  getOrderController,
  newOrderController,
} from "../controllers/orderController.js";


const router = express.Router();

router.get("/getOrder", getOrderController);
router.post("/newOrder", newOrderController);
export default router;