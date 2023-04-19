//add like

app.put("/posts/:postId/like", async (req, res) => {
  const postId = req.params.postId;

  try {
    const result = await db
      .collection("posts")
      .updateOne({ _id: ObjectId(postId) }, { $inc: { likes: 1 } });
    if (result.modifiedCount === 1) {
      res.status(200).json({ message: "Like added successfully." });
    } else {
      res.status(404).json({ error: "Post not found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to add like." });
  }
});

//delete like

app.put("/posts/:postId/unlike", async (req, res) => {
  const postId = req.params.postId;

  try {
    const result = await db
      .collection("posts")
      .updateOne(
        { _id: ObjectId(postId), likes: { $gt: 0 } },
        { $inc: { likes: -1 } }
      );
    if (result.modifiedCount === 1) {
      res.status(200).json({ message: "Like removed successfully." });
    } else if (result.modifiedCount === 0) {
      res.status(404).json({ error: "Post not found or has no likes." });
    } else {
      res.status(400).json({ error: "Unexpected error occurred." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to remove like." });
  }
});

//get all likes

app.get("/posts/:postId/likes", async (req, res) => {
  const postId = req.params.postId;

  try {
    const post = await db
      .collection("posts")
      .findOne({ _id: ObjectId(postId) }, { likes: 1 });
    if (post) {
      res.status(200).json({ likes: post.likes });
    } else {
      res.status(404).json({ error: "Post not found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to retrieve likes." });
  }
});
