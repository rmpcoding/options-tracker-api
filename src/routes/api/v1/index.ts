import { Router } from "express";
import usersRoutes from "./users.routes";
import stocksRoutes from "./stocks.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/stocks", stocksRoutes);

export default router;
