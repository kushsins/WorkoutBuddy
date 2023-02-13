import React from "react";
import "./WorkoutRow.css";

const Workout = ({ exercise }) => {
  const handleClick = async () => {
    const response = await fetch("/workouts/" + exercise._id, {
      method: "DELETE",
    });
    const json = await response.json;

    if (response.ok) {
      console.log("exercise Deleted");
    }
  };
  return (
    <div className="workoutRow">
      <h4>{exercise.title}</h4>
      <p>
        <strong>Reps : </strong>
        {exercise.reps}
      </p>
      <p>
        <strong>Load : </strong>
        {exercise.load}
      </p>
      <p>{exercise.updatedAt}</p>
      <span onClick={handleClick}>Delete</span>
    </div>
  );
};

export default Workout;
