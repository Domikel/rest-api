import { Post } from "../models/posts.js";
export const addNewPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('user');
        res.status(200).json({
        status: "success",
        data: {
            posts,
        },
        });
    } catch (err) {
        res.status(400).json({
        status: "fail",
        message: err,
        });
    }
}

export const getPostsByUser = async (req, res) => {
    try{
        const posts = await Post.find({user: req.params.id}).populate("user");
        res.status(200).json({
            status: "success",
            data: {
                posts,
            },
        });
    }
    catch(err){
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }

}

export const editPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.title = req.body.title;
    post.text = req.body.text;
    await post.save();
    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
