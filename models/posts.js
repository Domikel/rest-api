import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Post = mongoose.model("posts", postSchema);
