import React, { useEffect } from "react";
import WorkoutDetais from "../components/workoutDetails";
import WorkoutForm from "../components/workoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts");
      const json = await response.json();
      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
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
