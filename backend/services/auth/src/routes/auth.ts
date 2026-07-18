import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { query } from "../database/connection";
import { authenticateToken, AuthRequest } from "../middleware/auth";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        message: "Auth Service",
    });
});

router.post("/register", async (req, res) => {
    try {
        const name = req.body.name?.trim();
        const email = req.body.email?.trim().toLowerCase();
        const password = req.body.password;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email and password are required",
            });
        }

        if (password.length < 6) {
    return res.status(400).json({
        message: "Password must be at least 6 characters long",
    });
}

        const existingUser = await query(
            "SELECT id FROM users WHERE email = $1",
            [email]
        );

        if (existingUser.rows.length > 0) {
            return res.status(409).json({
                message: "Email already registered",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await query(
            `INSERT INTO users (name, email, password)
       VALUES ($1, $2, $3)`,
            [name, email, hashedPassword]
        );

        return res.status(201).json({
            message: "User registered successfully",
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Registration failed",
        });
    }
});

router.post("/login", async (req, res) => {
    try {
        const email = req.body.email?.trim().toLowerCase();
        const password = req.body.password;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required",
            });
        }

        const result = await query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        const user = result.rows[0];

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: "1d",
            }
        );

        return res.json({
            message: "Login successful",
            token,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Login failed",
        });
    }
});

router.get(
    "/profile",
    authenticateToken,
    async (req: AuthRequest, res) => {
        try {
            const result = await query(
                "SELECT id, name, email FROM users WHERE id = $1",
                [req.user?.id]
            );

            if (result.rows.length === 0) {
                return res.status(401).json({
                    message: "Session expired. Please login again.",
                });
            }

            return res.json(result.rows[0]);
        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: "Failed to load profile",
            });
        }
    }
);

export default router;