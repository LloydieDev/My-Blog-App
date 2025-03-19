import express from "express";
import fetch from "node-fetch"; // Use fetch in Node.js
import cors from "cors";


const app = express();
app.use(cors());
const port = 4000;

app.use(express.static("public"));
app.use("/api", async (req, res) => {
    try {
        const response = await fetch(`http://localhost:3000${req.originalUrl}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch from backend" });
    }
});

app.listen(port, () => {
    console.log(`Frontend running at http://localhost:${port}`);
});
