import { Router } from "express";
import { deleteUser } from "../controllers/deleteUser.js";
import { getSingleUser } from "../controllers/getUserById.js";
import createUser from "../controllers/createUser.js";
import displayAllUsers from "../controllers/displayAllUsers.js";
import loginUser from "../controllers/loginUser.js";
import auth from "../middleware/auth.js";
import { rules } from "../middleware/validator.js";
const router = Router();

router.get("/users", displayAllUsers);
router.post("/users/login", loginUser);
router.post("/users/register", rules, createUser);
router.get("/users/:id", auth, getSingleUser);
router.delete("/users/:id", auth, deleteUser);

export default router;
