import { Router } from "express";
import {
  getSinglePost,
  addNewPost,
  editPost,
  deletePost,
  getAllPosts,
  getPostsByUser,
} from "../controllers/postController.js";
import auth from "../middleware/auth.js";

const router = Router();
router.get("/posts", getAllPosts);
router.get("/posts/getpostbyuser/:id", auth, getPostsByUser);
router.get("/posts/:id", getSinglePost);
router.post("/posts", auth, addNewPost);
router.patch("/posts/:id", auth, editPost);
router.delete("/posts/:id", auth, deletePost);

export default router;
