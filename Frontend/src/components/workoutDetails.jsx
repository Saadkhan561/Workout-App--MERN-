import React from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetais = ({ workouts }) => {
  const {dispatch} = useWorkoutsContext()

  const handleClick =async()=>{
    const response = await fetch("http://localhost:4000/api/workouts/" + workouts._id, {
      method: "DELETE"
    })
    const json = await response.json()
    if (response.ok) {
      dispatch({type: "DELETE_WORKOUT", payload: json})
    }

  }
  return (
    <div className="workout-details">
      <h4>{workouts.title}</h4>
      <p>
        <strong>Load in Kg :</strong>
        {workouts.load}
      </p>
      <p>
        <strong>Reps :</strong>
        {workouts.reps}
      </p>
      <p>Created At : {workouts.createdAt}</p>
      <span onClick={handleClick}>Delete</span>
    </div>
  );
};

export default WorkoutDetais;
