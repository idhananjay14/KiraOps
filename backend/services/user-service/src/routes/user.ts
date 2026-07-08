import { Router } from "express";
import { query } from "../database/connection";
import { authenticateToken, AuthRequest } from "../middleware/auth";

const router = Router();

router.get("/profile", authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.user?.id;

    const result = await query(
      "SELECT * FROM user_profiles WHERE user_id = $1",
      [userId]
    );

    if (result.rows.length === 0) {
      return res.json({
        userId,
        phone: null,
        address: null,
        message: "No profile set up yet",
      });
    }

    return res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch profile" });
  }
});

router.put("/profile", authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.user?.id;
    const { phone, address } = req.body;

    const existing = await query(
      "SELECT * FROM user_profiles WHERE user_id = $1",
      [userId]
    );

    let result;

    if (existing.rows.length === 0) {
      result = await query(
        `INSERT INTO user_profiles (user_id, phone, address)
         VALUES ($1, $2, $3)
         RETURNING *`,
        [userId, phone, address]
      );
    } else {
      result = await query(
        `UPDATE user_profiles
         SET phone = $1, address = $2, updated_at = CURRENT_TIMESTAMP
         WHERE user_id = $3
         RETURNING *`,
        [phone, address, userId]
      );
    }

    return res.json({
      message: "Profile saved successfully",
      profile: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to save profile" });
  }
});

export default router;
