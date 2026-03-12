import express from "express";
import { sendMail } from "../services/mailer.js";
import { contactRateLimiter } from "../middleware/rateLimit.js";

const router = express.Router();

router.post("/", contactRateLimiter, async (req, res) => {
    const { name, email, message, company } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Honeypot
    if (company) {
        console.warn("Honeypot triggered!");
        return res.status(200).json({ message: "Message sent successfully" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    try {
        await sendMail({ name, email, message });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (err) {
        console.error("Mailer Error:", err);
        return res.status(500).json({ message: "Failed to send message" });
    }
});

export default router;