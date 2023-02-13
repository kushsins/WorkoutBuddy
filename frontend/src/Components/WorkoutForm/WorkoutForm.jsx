import React, { useState } from "react";
import InputRow from "../InputRow/InputRow";
import "./WorkoutForm.css";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, reps, load };
    const response = await fetch("/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      console.log("new workout added");
      setTitle("");
      setReps("");
      setLoad("");
    }
  };

  return (
    <div className="workoutFormCont">
      <h3>Add a Workout</h3>
      <form className="workoutForm" onSubmit={handleSubmit}>
        <InputRow
          title={"Workout :"}
          type={"text"}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <InputRow
          title={"Reps :"}
          type={"number"}
          onChange={(e) => {
            setReps(e.target.value);
          }}
          value={reps}
        />
        <InputRow
          title={"Load (in kg) :"}
          type={"number"}
          onChange={(e) => {
            setLoad(e.target.value);
          }}
          value={load}
        />
        <button className="addWorkoutBtn"> Add Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default WorkoutForm;
