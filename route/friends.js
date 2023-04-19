import { Router } from "express";
import {
  addFriend,
  getFriendsByUser,
  getFriend,
  deleteFriend,
} from "../controllers/friendsController.js";

const router = Router();

//add a new friend
router.post("/friends", addFriend);

//see all friends
router.get("/friends/user/:id", getFriendsByUser);

//see a single friend
router.get("/friends/:id", getFriend);

//delete friend
router.delete("/friends/:id", deleteFriend);

export default router;
