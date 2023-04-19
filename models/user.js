import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: function(){
        return `https://ui-avatars.com/api/?name=${this.firstName}+${this.lastName}&background=random&color=fff&rounded=true&size=50`
      }
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const User = mongoose.model("users", userSchema);
