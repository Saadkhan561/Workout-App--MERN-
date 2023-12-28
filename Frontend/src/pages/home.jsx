import React, { useEffect, useState } from "react";
import WorkoutDetais from "../components/workoutDetails";
import WorkoutForm from "../components/workoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:3000/api/workouts");
      const json = await response.json();
      if (response.ok) {
        setWorkouts(json);
      }
    };
    fetchWorkouts();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => {
          return <WorkoutDetais key={workout._id} workouts={workout} />;
        })}
      </div>
      <div>
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
