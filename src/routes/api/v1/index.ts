import { Router } from "express";
import usersRoutes from "./users.routes";
import stocksRoutes from "./stocks.routes";
import authRoutes from "./auth.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
router.use("/stocks", stocksRoutes);

export default router;
