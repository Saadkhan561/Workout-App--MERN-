const express = require('express')
const {createWorkout, getWorkout, getAllWorkouts, deleteWorkout, updateWorkout} = require('../controllers/workoutControllers')

const router = express.Router()

// GET ALL WORKOUTS
router.get('/', getAllWorkouts)

// GET A SINGLE WORKOUT
router.get('/:id', getWorkout)

// POST A WORKOUT
router.post('/', createWorkout)

// DELETE A WORKOUT
router.delete('/:id', deleteWorkout)

// UPDATE A WORKOUT
router.patch('/:id', updateWorkout)

module.exports = router