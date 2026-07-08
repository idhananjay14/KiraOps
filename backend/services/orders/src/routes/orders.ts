import { Router } from "express";
import { query } from "../database/connection";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { userId, productId, quantity, totalAmount } = req.body;

    if (!userId || !productId || !quantity || !totalAmount) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const result = await query(
      `INSERT INTO orders
      (user_id, product_id, quantity, total_amount)
      VALUES ($1, $2, $3, $4)
      RETURNING *`,
      [userId, productId, quantity, totalAmount]
    );

    return res.status(201).json({
      message: "Order created successfully",
      order: result.rows[0],
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to create order",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await query(
      "SELECT * FROM orders ORDER BY id DESC"
    );

    return res.json(result.rows);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch orders",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await query(
      "SELECT * FROM orders WHERE id = $1",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    return res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch order",
    });
  }
});

export default router;