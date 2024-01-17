const express = require("express");

const router = express.Router();

router.get("/get-key", (req, res) => {
  const key = process.env.API_KEY;
  res.json({ key });
});

module.exports = router;
