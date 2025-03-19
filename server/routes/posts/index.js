
// this file will Combines all post-related routes

import express from "express";
import getPosts from "./getPosts.js";

const router = express.Router();

// Define all post-related routes
router.use("/", getPosts);

export default router;