const express = require('express');
const router = express.Router();

const workoutProgramController = require('../controllers/workoutController');

router.get('/getWorkouts', workoutProgramController.getAllWorkoutPrograms);
// router.get('/getSpecificWorkout/:id', workoutProgramController.getSpecificWorkoutProgram);
router.post('/postWorkoutProgram', workoutProgramController.createProgram);

module.exports = router;