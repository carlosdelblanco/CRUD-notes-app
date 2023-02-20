const express = require("express");
const router = express.Router();

router.get("/signin", (req, res) => {
  res.send("Signin in");
});

router.get("/signup", (req, res) => {
  res.send("Authentication form");
});

module.exports = router;
