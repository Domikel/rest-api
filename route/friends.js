//add a new friend

app.post("/users/:userId/friends", async (req, res) => {
  const userId = req.params.userId;
  const friend = req.body.friend;

  try {
    const result = await db
      .collection("users")
      .updateOne({ _id: ObjectId(userId) }, { $push: { friends: friend } });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to add friend." });
  }
});
//see all friends

app.get("/users/:userId/friends", async (req, res) => {
  const userId = req.params.userId;

  try {
    const result = await db
      .collection("users")
      .findOne({ _id: ObjectId(userId) }, { friends: 1 });
    res.status(200).json(result.friends);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to retrieve friends." });
  }
});
//see a single friend

app.get("/users/:userId/friends/:friendEmail", async (req, res) => {
  const userId = req.params.userId;
  const friendEmail = req.params.friendEmail;

  try {
    const result = await db
      .collection("users")
      .findOne(
        { _id: ObjectId(userId), "friends.email": friendEmail },
        { "friends.$": 1 }
      );
    if (result) {
      res.status(200).json(result.friends[0]);
    } else {
      res.status(404).json({ error: "Friend not found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to retrieve friend." });
  }
});
//delete friend

app.delete("/users/:userId/friends/:friendEmail", async (req, res) => {
  const userId = req.params.userId;
  const friendEmail = req.params.friendEmail;

  try {
    const result = await db
      .collection("users")
      .updateOne(
        { _id: ObjectId(userId) },
        { $pull: { friends: { email: friendEmail } } }
      );
    if (result.modifiedCount === 1) {
      res.status(200).json({ message: "Friend deleted successfully." });
    } else {
      res.status(404).json({ error: "Friend not found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to delete friend." });
  }
});
