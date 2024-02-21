import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const {dispatch} = useWorkoutsContext()
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    try {
      const response = await fetch("http://localhost:4000/api/workouts", {
        method: "POST",
        body: JSON.stringify(workout),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        setError(json.error);
      }
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        setTitle("");
        setLoad("");
        setReps("");
        setError(null);
        console.log("New workout added", json);
        dispatch({type: 'CREATE_WORKOUT', payload: json})
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label htmlFor="title">Exersize Title:</label>
      <input
        id="title"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label htmlFor="load">Load in Kg:</label>
      <input
        id="load"
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label htmlFor="reps">Reps :</label>
      <input
        id="reps"
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button>Add workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
