
// Aggregates all route groups

import express from "express";
import postsRoutes from "./posts/index.js";

const router = express.Router();

router.use("/api/posts", postsRoutes); 

export default router;