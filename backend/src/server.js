import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

import { connectDB } from "./config/db.js";
import appRouter from "./routes/appRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(
  cors({
    origin: ["http://localhost:5174", "http://localhost:5173"],
    methods: "POST",
    credentials: true,
  })
);
app.use(express.json());
app.use("/api", appRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
  });
});
