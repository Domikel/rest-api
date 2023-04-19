import mongoose from "mongoose";

const likeSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts",
  },

}, {
  timestamps: true,
  versionKey:false
});

export const Like = mongoose.model("likes", likeSchema);


