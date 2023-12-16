const express = require('express')
const {createWorkout, getWorkout, getAllWorkout} = require('../controllers/workoutControllers')

const router = express.Router()

const Workout = require('../models/workoutModel')

// GET ALL WORKOUTS
router.get('/', getAllWorkout)

// GET A SINGLE WORKOUT
router.get('/:id', getWorkout)

// POST A WORKOUT
router.post('/', createWorkout)

// DELETE A WORKOUT
router.delete('/:id', (req,res) => {
    res.json({msg: 'DELETE a workout'})
}
)
// UPDATE A WORKOUT
router.patch('/:id', (req,res) => {
    res.json({msg: 'UPDATE a new workout'})
})

module.exports = router