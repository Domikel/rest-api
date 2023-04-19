import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


import userRoute from "./route/user.js";
import postRouter from './route/posts.js'


dotenv.config();

const app = express();
app.use(json());
app.use(cors());

const port = process.env.PORT || 2000;
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api", userRoute);
app.use("/api", postRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
