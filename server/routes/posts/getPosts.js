import express from "express";
import postData from "../../data/postData.js";

const router = express.Router();

router.get("/", (req, res) => {
    try {
        res.json(postData);
    } catch (error) {
        res.status(500).json({ message: "Error fetching post" });
    }
});

export default router;