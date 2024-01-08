const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    exerciseId: { type: String },
  },
  {
    timestamps: true,
  }
);

const exercisesModel = mongoose.model("Exercise", exerciseSchema);

module.exports = exercisesModel;
