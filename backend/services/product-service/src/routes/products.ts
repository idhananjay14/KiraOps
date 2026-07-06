import { Router } from "express";
import { query } from "../database/connection";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await query("SELECT * FROM products ORDER BY id");

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch products",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const productId = Number(req.params.id);

    const result = await query(
      "SELECT * FROM products WHERE id = $1",
      [productId]  
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch product",
    });
  }
});

export default router;