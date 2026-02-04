import { Router } from "express";

const router = Router();

router
  .route("/")
  .get((req, res) => {
    res.send("getUsers");
  })
  .post((req, res) => res.send("create user"));

router
  .route("/:_id")
  .get((req, res) => {
    res.send("get a user by id");
  })
  .put((req, res) => {
    res.send("update a user by id");
  })
  .delete((req, res) => {
    res.send("delete a user by id");
  });

export default router;
