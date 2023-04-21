import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    text: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    photo: {
      type: String,
      default: "",
    }
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Post = mongoose.model("posts", postSchema);
