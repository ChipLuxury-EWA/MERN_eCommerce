import express from "express";
import healthRoutes from "./v1/health.routes.js";
import productsRoutes from "./v1/products.routes.js";

const router = express.Router();

router.use("/health", healthRoutes);
router.use("/products", productsRoutes);
export default router;
