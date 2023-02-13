import React from "react";
import WorkoutForm from "../../Components/WorkoutForm/WorkoutForm";
import Workouts from "../../Components/Workouts/Workouts";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <WorkoutForm />
      <Workouts />
    </div>
  );
};

export default Home;
