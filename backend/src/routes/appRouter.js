import express from "express";
import { homePage,aboutProject,team,researchData, outreach, newsGallery, publications,resources } from "../controllers/appController.js";

const router = express.Router();

router.get("/", homePage);
router.get("/about-project", aboutProject);
router.get("team", team);
router.get("research-data", researchData);
router.get("/outreach", outreach);
router.get("news-gallery", newsGallery);
router.get("/publications", publications);
router.get("/resources", resources);





export default router;