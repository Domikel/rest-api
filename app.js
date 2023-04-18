import express, { json } from "express";
import mongoose from "mongoose";


mongoose.connect(
  "mongodb+srv://immikel:JFzl8BliKy3NrA8P@cluster0.hmbiy9y.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
});

const User = mongoose.model("User", userSchema);



const app = express();

app.use(json());



const port = process.env.PORT || 2000;



app.get("/users", async (req, res)=>{
 
  const users = await User.find();

  res.json(users);
});

app.post('/users', async (req, res) => {
  const newUser = new User({
    username: req.body.username
  });

  const savedUser = await newUser.save();

  res.json(savedUser);
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
