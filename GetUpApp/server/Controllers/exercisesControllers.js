// model schema
const Exercise = require("../Models/exercisesModel");

// Get all exercises
const getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single exercise by ID
const getExerciseById = async (req, res) => {
  const exerciseId = req.params.id;

  try {
    const exercise = await Exercise.findById(exerciseId);

    if (!exercise) {
      return res.status(404).json({ error: "Exercise not found" });
    }

    res.json(exercise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get exercises by category
const getExerciseByCategory = async (req, res) => {
  const category = req.params.category;

  try {
    const exercises = await Exercise.find({ category });
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new exercise
const createExercise = async (req, res) => {
  const exercise = new Exercise({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    exerciseId: req.body.id,
  });

  try {
    const newExercise = await exercise.save();
    res.status(201).json(newExercise);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an exercise by ID
const updateExerciseById = async (req, res) => {
  if (req.body.name != null) {
    res.exercise.name = req.body.name;
  }

  if (req.body.description != null) {
    res.exercise.description = req.body.description;
  }

  if (req.body.category != null) {
    res.exercise.category = req.body.category;
  }

  if (req.body.id != null) {
    res.exercise.id = req.body.id;
  }

  if (req.body.date != null) {
    res.exercise.date = req.body.date;
  }

  try {
    const updatedExercise = await res.exercise.save();
    res.json(updatedExercise);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an exercise by ID
const deleteExerciseById = async (req, res) => {
  try {
    await res.exercise.remove();
    res.json({ message: "Exercise deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllExercises,
  getExerciseById,
  getExerciseByCategory,
  createExercise,
  updateExerciseById,
  deleteExerciseById,
};
