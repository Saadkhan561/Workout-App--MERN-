import React from "react";

const WorkoutDetais = ({ workouts }) => {
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
    </div>
  );
};

export default WorkoutDetais;
