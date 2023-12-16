const Workout = require("../mmodels/workoutModel");
const mongoose = require("mongoose");

// GET ALL WORKOUTS
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({ reps: 20 });

  res.status(200).json(workouts);
};

// GET A SIMGLE WORKOUT
const getWorkout = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid Id" });
  }

  const { id } = req.params;
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "Workout not found" });
  }
  res.satus(200).json(workout);
};

// CREATE NEW WORKOUT
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.json(workout);
  } catch {
    (error) => {
      res.json({ error: error.message });
    };
  }
};

// UPDATE WORKOUT
const updateWorkout = async(req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid Id" });
      }

    const workout
}

// DELETE A WORKOUT
const deleteWorkout = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid Id" });
      }

    const workout = await Workout.findOneAndDelete({_id : id})

    if (!workout) {
        return res.status(404).json({ error: "No such workout!" });
      }
    
      res.status(200).json(workout)
}

module.expotrs = {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout
};
