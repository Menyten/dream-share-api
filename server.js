const express = require("express");
const router = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(router);

// Test route to make sure the server is up
app.get("/ok", (req, res) => {
  res.send("ok");
});

const startServer = () =>
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = startServer;
