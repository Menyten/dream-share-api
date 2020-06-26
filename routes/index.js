const express = require("express");
const router = express.Router();

const posts = [
  {
    title: "Yeet",
    text: "I had a dream",
    createdAt: new Date().toISOString(),
  },
  {
    title: "Yeet",
    text: "I had a dream",
    createdAt: new Date().toISOString(),
  },
  {
    title: "Yeet",
    text: "I had a dream",
    createdAt: new Date().toISOString(),
  },
  {
    title: "Yeet",
    text: "I had a dream",
    createdAt: new Date().toISOString(),
  },
  {
    title: "Yeet",
    text: "I had a dream",
    createdAt: new Date().toISOString(),
  },
];

router.get("/posts", (req, res) => {
  res.send(posts);
});

module.exports = router;
