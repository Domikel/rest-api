import express, { json } from "express";
import mongoose from "mongoose";
import { deleteUser } from "./controllers/deleteUser.js";
import { getSingleUser } from "./controllers/getUserById.js";


mongoose.connect(
  "mongodb+srv://immikel:JFzl8BliKy3NrA8P@cluster0.hmbiy9y.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
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


const app = express();

app.use(json());

const port = process.env.PORT || 2000;

app.get("/users", async (req, res) => {
  const users = await User.find();

  res.json(users);
});
    
app.get("/users/:id", getSingleUser);

app.delete("/users/:id", deleteUser);

app.post("/users", async (req, res) => {
  const newUser = new User({
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,

  });

  const savedUser = await newUser.save();


  res.status(201).json(savedUser);

  if (!userName) {
    return res.status(400).send("username is required");
  }
  
  res.json(savedUser);

});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
