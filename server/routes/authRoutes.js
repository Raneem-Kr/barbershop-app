const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  console.log("ENV USER:", process.env.ADMIN_USERNAME);
  console.log("ENV PASS:", process.env.ADMIN_PASSWORD);

  console.log("INPUT USER:", username);
  console.log("INPUT PASS:", password);

if (
  username === process.env.ADMIN_USERNAME &&
  password === process.env.ADMIN_PASSWORD
) {
  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return res.json({ token });
}

  res.status(401).json({
    message: "Falsche Anmeldedaten",
  });
});

module.exports = router;
