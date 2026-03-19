import { Router } from "express";

import { stocksController } from "../../../controllers";
import { timestampMiddleware } from "../../../middlewares/middleware";

const router = Router();

router.use(timestampMiddleware);

router
  .route("/")
  .get(stocksController.list.bind(stocksController))
  .post(stocksController.create.bind(stocksController));

router
  .route("/:_id")
  .get(stocksController.getById.bind(stocksController))
  .put(stocksController.update.bind(stocksController))
  .delete(stocksController.delete.bind(stocksController));

export default router;
