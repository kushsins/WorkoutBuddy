const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

workoutSchema.statics.alreadyExists = async function (title) {
  try {
    const exercise = await this.findOne({ title });
    if (exercise) return exercise;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mongoose.model("Workout", workoutSchema);
