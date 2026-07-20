import client from "prom-client";

/**
 * Register that stores all metrics.
 */
export const register = new client.Registry();

/**
 * Collect default Node.js metrics.
 * Examples:
 * - CPU usage
 * - Memory usage
 * - Event loop lag
 * - Process uptime
 */
client.collectDefaultMetrics({
  register,
});

/**
 * Counter for total HTTP requests.
 */
export const httpRequestsTotal = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests received",
  labelNames: ["method", "route", "statusCode"],
  registers: [register],
});