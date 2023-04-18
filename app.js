import express from "express";
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

const port = process.env.PORT || 2000;



app.get("/users", (req, res)=>{

  User.find()
    .then((user) => {
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.send(user);
    })
    .catch((err) => console.log(err));
  
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
