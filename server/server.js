import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/index.js";
import cors from "cors";


const app = express();
app.use(cors());
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", routes); // Uses all routes

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
