import { Router } from "express";
import { Comment } from "../models/comments.js";

const router = Router();

router.post("/comments", async (req, res) => {
  const { text, user, post } = req.body;
  const newComment = await Comment.create({ text, user, post });
  res.status(201).json({message: "'commnt saved successfully", data:newComment})
});

router.delete("/comments/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).jasonsend();
    }
    res.status(200).json({ message: "delete successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});