import express from "express";
import {signupValidation,loginValidation } from "../models/Validation.js";
import {
  loginController,
  signupController,
} from "../controllers/authController.js";

const router = express.Router();
router.post("/signup", signupValidation, signupController);
router.post("/login", loginValidation, loginController);

export default router;
