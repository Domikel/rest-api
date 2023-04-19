import { Router } from "express";
import { addNewComment, deleteComment, seeAllCommentsByPost } from "../controllers/commentsConntroller.js";


const router = Router();

router.post("/comments", addNewComment);
router.get("/comments/:id", seeAllCommentsByPost);

router.delete("/comments/:id",deleteComment);


export default router;
