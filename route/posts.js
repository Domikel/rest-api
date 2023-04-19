//add a new post
//edit a post
//delete a post
//get all posts
//get a single post
//get all posts by a user

import { Router } from "express";
import { getSinglePost, addNewPost, editPost, deletePost, getAllPosts, getPostsByUser } from "../controllers/postController.js";

const router = Router();
router.get("/posts", getAllPosts)
router.get("/posts/getpostbyuser/:id", getPostsByUser)
router.get("/posts/:id", getSinglePost);
router.post("/posts", addNewPost);
router.patch("/posts/:id", editPost);
router.delete("/posts/:id", deletePost)





export default  router


