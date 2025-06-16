import express from "express";
import serverless from "serverless-http"; // ✅ Required for Vercel
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import { connectDB } from "../db/index.js";
import holdingRouter from "../router/holdingRouter.js";
import positionRouter from "../router/positionRouter.js";
import orderRouter from "../router/orderRouter.js";
import authRouter from "../router/authRouter.js";

// Load environment variables
dotenv.config({ path: "../.env" });

// Initialize Express app
const app = express();

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Connect DB (once during cold start)
await connectDB();

// Routes
app.use("/api/holdings", holdingRouter);
app.use("/api/positions", positionRouter);
app.use("/api/orders", orderRouter);
app.use("/api/auth", authRouter);

// ✅ Export as a serverless function
export const handler = serverless(app);
