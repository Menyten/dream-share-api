const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// Test route to make sure the server is up
app.get("/ok", (req, res) => {
  res.send("ok");
});

const startServer = () =>
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = startServer;
