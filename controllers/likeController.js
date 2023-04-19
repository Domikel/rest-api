import { Like } from "../models/likes.js";
export const addLike = async (req, res) => {
  try {
    const like = new Like(req.body);
    await like.save();
    res.status(200).json({
      status: "success",
      data: {
        like,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const deleteLike = async (req, res) => {
  try {
    const like = await Like.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        like,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const getAllLikesPerPost = async (req, res) => {
  try {
    const likes = await Like.find({ post: req.params.id })
      .populate("user")
      .populate("post");
    console.log(likes.length);
    res.status(200).json({
      status: "success",
      data: {
        likes,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
