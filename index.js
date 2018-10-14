const express = require("express");

const app = express();

app.get("/api/proposals", function(req, res) {
  console.log("cool here");
  res.json({ 1: "nin", 2: "shas" });
  res.end();
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
