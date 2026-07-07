import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { query } from "../database/connection";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        message: "Auth Service",
    });
});

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email and password are required",
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
        const { email, password } = req.body;

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

export default router;