import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'
import { deleteUser } from "./controllers/deleteUser.js";
import { getSingleUser } from "./controllers/getUserById.js";
import createUser from "./controllers/createUser.js";
import displayAllUsers from "./controllers/displayAllUsers.js";
import loginUser from "./controllers/loginUser.js";

import auth from "./middleware/auth.js";

dotenv.config();

const app = express();
app.use(json());
app.use(cors())

const port = process.env.PORT || 2000;
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



app.get("/users", displayAllUsers);
app.post("/users/login", loginUser);
app.get("/users/:id", auth, getSingleUser);
app.post("/users", createUser);
app.delete("/users/:id",auth,  deleteUser);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
