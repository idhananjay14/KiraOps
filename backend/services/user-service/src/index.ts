import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

import userRoutes from "./routes/user";
import { connectDB } from "./database/connection";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3005;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "User Service is healthy" });
});

app.use("/users", userRoutes);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`User service running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  }
};

startServer();
