const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true, minLength: 3, maxLength: 30 },
    lastname: { type: String, required: true, minLength: 3, maxLength: 30 },
    email: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 200,
      unique: true,
    },
    password: { type: String, required: true, minLength: 3, maxLength: 250 },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
