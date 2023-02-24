const express = require("express");
const router = express.Router();

router.get("/users/signin", (req, res) => {
  res.send("Signin in");
});

router.get("/users/signup", (req, res) => {
  res.send("Authentication form");
});

module.exports = router;

// test
