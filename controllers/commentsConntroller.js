import {Comment} from '../models/comments.js'
export const addNewComment = async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(200).json({
      status: "success",
      data: {
        comment
      },
    });
  } catch (err) {
    
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};


export const deleteComment =  async (req, res) => {
    try {
      const comment = await Comment.findByIdAndDelete(req.params.id);
      if (!comment) {
        return res.status(404).json({
          message: "comment not found",
          
        })
      }
      res.status(200).json({ message: "delete successfully" });
    } catch (error) {
      res.status(500).send(error);
    }
  }

export const seeAllCommentsByPost = async (req, res) => {
    try {
        const comments = await Comment.find({ post: req.params.id })
        .populate("user")
        .populate("post");
        res.status(200).json({
        status: "success",
        data: {
            comments,
        },
        });
    } catch (err) {
        res.status(400).json({
        status: "fail",
        message: err,
        });
    }
}