import { Router } from "express";

const router = Router();

router
  .route("/")
  .get((req, res) => {
    res.send("getstocks");
  })
  .post((req, res) => res.send("create stock"));

router
  .route("/:_id")
  .get((req, res) => {
    res.send("get a stock by id");
  })
  .put((req, res) => {
    res.send("update a stock by id");
  })
  .delete((req, res) => {
    res.send("delete a stock by id");
  });

export default router;
