const express = require("express");
const {
  getAllExercises,
  getExerciseById,
  createExercise,
  updateExerciseById,
  deleteExerciseById,
} = require("../Controllers/exercisesControllers");

const router = express.Router();

//getting all exercises
router.get("/", getAllExercises);

//getting one exercise
router.get("/:id", getExerciseById);

//create exercise
router.post("/", createExercise);

//update exercise
router.patch("/:id", updateExerciseById);

//delete exercise
router.delete("/:id", deleteExerciseById);

module.exports = router;
