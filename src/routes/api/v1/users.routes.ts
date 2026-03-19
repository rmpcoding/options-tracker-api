import { Router } from "express";

import { usersController } from "../../../controllers";
import {
  timestampMiddleware,
  tokenValidator,
} from "../../../middlewares/middleware";

const router = Router();

router.use(timestampMiddleware);

router
  .route("/")
  .get(usersController.list.bind(usersController))
  .post(usersController.create.bind(usersController));

router.get("/me", tokenValidator, usersController.me.bind(usersController));

router
  .route("/:_id")
  .get(usersController.getById.bind(usersController))
  .put(usersController.update.bind(usersController))
  .delete(usersController.delete.bind(usersController));

export default router;
