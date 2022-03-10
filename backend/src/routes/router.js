import express from "express";
import healthRoutes from "./v1/health.routes.js";
import apiRoutes from "./v1/api.routes.js";

const router = express.Router();

router.use("/health", healthRoutes);
router.use("/api", apiRoutes);
export default router;
