import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "posts",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const Comment = mongoose.model("comments", commentSchema);