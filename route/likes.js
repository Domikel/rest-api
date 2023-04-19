//add like
//delete like
//get all likes 

import { Router } from "express";

import { addLike, deleteLike,  getAllLikesPerPost } from "../controllers/likeController.js";

const router = Router();

router.post("/like", addLike);
router.delete("/like/:id", deleteLike);
router.get("/likes/:id", getAllLikesPerPost);



export default router;