import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";
import { httpRequestsTotal, register } from "./metrics";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());

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

app.get("/health", (_, res) => {
  res.json({
    status: "Gateway is healthy",
  });
});

app.get("/metrics", async (_req, res) => {
  res.setHeader("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.use(
  "/api/auth",
  createProxyMiddleware({
    target: process.env.AUTH_SERVICE_URL!,
    changeOrigin: true,
    pathRewrite: {
      "^/api/auth": "/auth",
    },
  })
);

app.use(
  "/api/products",
  createProxyMiddleware({
    target: process.env.PRODUCT_SERVICE_URL!,
    changeOrigin: true,
    pathRewrite: {
      "^/api/products": "/products",
    },
  })
);

app.use(
  "/api/orders",
  createProxyMiddleware({
    target: process.env.ORDER_SERVICE_URL!,
    changeOrigin: true,
    pathRewrite: {
      "^/api/orders": "/orders",
    },
  })
);

app.use(
  "/api/users",
  createProxyMiddleware({
    target: process.env.USER_SERVICE_URL!,
    changeOrigin: true,
    pathRewrite: {
      "^/api/users": "/users",
    },
  })
);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Gateway running on ${PORT}`);
});