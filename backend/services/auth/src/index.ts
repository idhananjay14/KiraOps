import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

import authRoutes from "./routes/auth";
import { connectDB } from "./database/connection";
import { httpRequestsTotal, register } from "./metrics";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3002;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.on("finish", () => {
    httpRequestsTotal.inc({
      method: req.method,
      route: req.path,
      statusCode: res.statusCode.toString(),
    });
  });

  next();
});

app.get("/health", (req, res) => {
  res.json({
    status: "Auth Service is healthy",
  });
});

app.get("/metrics", async (_req, res) => {
  res.setHeader("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.use("/auth", authRoutes);

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Auth service running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  }
};

startServer();