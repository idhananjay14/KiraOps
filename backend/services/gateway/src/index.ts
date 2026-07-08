import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({
        status: "Gateway is healthy",
    });
});

app.use(
    "/api/products",
    createProxyMiddleware({
        target: process.env.PRODUCT_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: (path) => `/products${path}`,
    })
);

app.use(
  "/api/auth",
  createProxyMiddleware({
    target: process.env.AUTH_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: (path) => `/auth${path}`,
  })
);

app.use(
  "/api/orders",
  createProxyMiddleware({
    target: process.env.ORDER_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: (path) => `/orders${path}`,
  })
);

app.use(
  "/api/users",
  createProxyMiddleware({
    target: process.env.USER_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: (path) => `/users${path}`,
  })
);

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found",
    });
});

app.use((
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction) => {
    console.error(err);

    res.status(500).json({
        message: "Internal server error",
    });
});

app.listen(PORT, () => {
    console.log(`Gateway running on port ${PORT}`);
});