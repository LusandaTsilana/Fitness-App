const express = require("express");
const {
  getAllExercises,
  getExerciseById,
  getExerciseByCategory,
  createExercise,
  updateExerciseById,
  deleteExerciseById,
} = require("../Controllers/exercisesControllers");

const router = express.Router();

//getting all exercises
router.get("/", getAllExercises);

//getting one exercise by id
router.get("/:id", getExerciseById);

//getting exercise by category
router.get("/category/:category", getExerciseByCategory);

//create exercise
router.post("/", createExercise);

//update exercise
router.patch("/:id", updateExerciseById);

//delete exercise
router.delete("/:id", deleteExerciseById);

module.exports = router;
