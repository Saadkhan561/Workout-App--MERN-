const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// GET ALL WORKOUTS
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({createAt: -1});

  res.status(200).json(workouts);
}; 

// GET A SINGLE WORKOUT
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid Id" });
  }

  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "Workout not found" });
  }
  res.status(200).json(workout);
};

// CREATE NEW WORKOUT
const createWorkout = async (req, res) => {
  console.log(req.body)
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout); 
  } catch {
    (error) => {
      res.status(400).json({ error: error.message });
    };
  }
};

// UPDATE WORKOUT
const updateWorkout = async(req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid Id" });
      }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
      ...req.body
    })
    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }
    res.status(200).json(workout);
    
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

module.exports = {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
};
