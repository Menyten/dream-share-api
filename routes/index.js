const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

router.get("/api/posts", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

router.post("/api/posts", async (req, res) => {
  const post = new Post(req.body);
  const savedPost = await post.save();
  res.send(savedPost);
});

module.exports = router;
