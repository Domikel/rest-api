import mongoose from "mongoose";

const friendSchema = mongoose.Schema(
  {
    friendId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Friend = mongoose.model("friends", friendSchema);
