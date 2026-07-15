import { Router } from "express";
import { query } from "../database/connection";
import { authenticateToken, AuthRequest } from "../middleware/auth";

const router = Router();

router.post("/", authenticateToken, async (req: AuthRequest, res) => {
  console.log("REQ BODY:", req.body);
  try {
    const { productId, productName, productImage, quantity, totalAmount } = req.body;
    const userId = req.user?.id;

    if (
      productId  === undefined ||
      !productName ||
      !productImage ||
      quantity === undefined ||
      totalAmount === undefined
    ) {
      return res.status(400).json({
        message: "productId, productName, productImage, quantity and totalAmount are required",
      });
    }

    const result = await query(
      `INSERT INTO orders
      (user_id, product_id, product_name, product_image, quantity, total_amount)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *`,
      [userId, productId, productName, productImage, quantity, totalAmount]
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

router.get("/", authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.user?.id;
    
    const result = await query(
      "SELECT * FROM orders WHERE user_id = $1 ORDER BY id DESC",
      [userId]
    );

    return res.json(result.rows);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch orders",
    });
  }
});

router.get("/:id", authenticateToken, async (req: AuthRequest, res) => {
  try {
     const userId = req.user?.id;
     
    const result = await query(
      "SELECT * FROM orders WHERE id = $1 AND user_id = $2",
      [req.params.id, userId]
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