const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// get all workout
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Workout" });
  }
  const workout = await Workout.findById(id);

  if (!workout) {
    return req.status(404).json({ error: "No such workout exists" });
  }

  res.status(200).json(workout);
};
// create a new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  const exercise = await Workout.alreadyExists(title);
  //add doc to db
  if (exercise) {
    const { id } = exercise;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout exists" });
    }
    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!workout) {
      return req.status(400).json({ error: "No such workout exists" });
    }
    res.status(200).json(workout);
  } else {
    console.log("no such work out exists");
    try {
      const workout = await Workout.create({ title, reps, load });
      res.status(200).json(workout);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout exists" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return req.status(400).json({ error: "No such workout exists" });
  }

  res.status(200).json(workout);
};

// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout wxists" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return req.status(400).json({ error: "No such workout exists" });
  }
  res.status(200).json(workout);
};

module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
