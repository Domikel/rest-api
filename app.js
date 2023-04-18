import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { deleteUser } from "./controllers/deleteUser.js";
import { getSingleUser } from "./controllers/getUserById.js";
import createUser from "./controllers/createUser.js";
import displayAllUsers from "./controllers/displayAllUsers.js";
import loginUser from "./controllers/loginUser.js";

dotenv.config();

const app = express();
app.use(json());

const port = process.env.PORT || 2000;
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const User = mongoose.model("User", userSchema);

app.get("/users", displayAllUsers);
app.post("/users/login", loginUser)
app.get("/users/:id", getSingleUser);
app.post("/users", createUser);
app.delete("/users/:id", deleteUser);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
