import React, { useEffect, useState } from "react";
import Workout from "../WorkoutRow/WorkoutRow";
import "./Workouts.css";

const Workouts = () => {
  const [exercises, setExercises] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/workouts");
      const json = await response.json();

      if (response.ok) {
        setExercises(json);
      }
    };
    fetchWorkouts();
  });

  return (
    <div className="workouts">
      {exercises &&
        exercises.map((exercise) => (
          <Workout key={exercise._id} exercise={exercise} />
        ))}
    </div>
  );
};

export default Workouts;
