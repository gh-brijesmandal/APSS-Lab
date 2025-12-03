import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";
import appRouter from "./routes/appRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

// making router for all routes 
app.use(express.json());
app.use("/",appRouter);

connectDB().then(() => {
app.listen(PORT, () => {
    console.log("Server running on http://localhost:"+PORT);
})
})
