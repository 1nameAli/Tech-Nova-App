import express from "express";
import serverless from "serverless-http";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import { connectDB } from "../db/index.js";
import holdingRouter from "../router/holdingRouter.js";
import positionRouter from "../router/positionRouter.js";
import orderRouter from "../router/orderRouter.js";
import authRouter from "../router/authRouter.js";

// Initialize
const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

// CORS Configuration
const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Connect DB (wait for it)
await connectDB();

// Routes
app.use("/api/holdings", holdingRouter);
app.use("/api/positions", positionRouter);
app.use("/api/orders", orderRouter);
app.use("/api/auth", authRouter);

// Export handler for Vercel
export const handler = serverless(app);
