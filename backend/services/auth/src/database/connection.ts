import { Pool } from "pg";

let pool: Pool;

export async function connectDB() {
  pool = new Pool({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME || "auth",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "password",
  });

  await pool.query("SELECT NOW()");

  console.log("✅ Connected to PostgreSQL");
}

export function query(text: string, params?: any[]) {
  return pool.query(text, params);
}