const express = require("express");

const router = express.Router();

//getting all exercises
router.get("/", (req, res) => {
  res.send("Hello");
});

//getting one exercise
router.get("/:id", (req, res) => {});

//create exercise
router.post("/", (req, res) => {});

//update exercise
router.patch("/:id", (req, res) => {});

//delete exercise
router.delete("/:id", (req, res) => {});

module.exports = router;
