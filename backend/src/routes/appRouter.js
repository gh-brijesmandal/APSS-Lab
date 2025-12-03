import express from "express";
import { contactFormController } from "../controllers/appController.js";


const router = express.Router();

router.post("/contact",contactFormController);


export default router;