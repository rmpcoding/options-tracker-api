import express from "express";
import User from "../models/User.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = new User({
      email: "test@test.com",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    await user.save();
    res.json({
      message: "🚀",
    });
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

export default router;
