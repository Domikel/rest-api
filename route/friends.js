import { Router } from "express";
import {
  addFriend,
  getFriendsByUser,
  getFriend,
  deleteFriend,
  getAllFriends
} from "../controllers/friendsController.js";
import auth from '../middleware/auth.js'

const router = Router();
//see all friends

router.get("/friends", getAllFriends);

//add a new friend
router.post("/friends", addFriend);

//see all friends by user
router.get("/friends/user/:id", getFriendsByUser);

//see a single friend
router.get("/friends/:id", getFriend);

//delete friend
router.delete("/friends/:id", deleteFriend);

export default router;
