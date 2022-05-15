const express = require('express');
const router = express.Router();

const exerciseController = require('../controllers/exerciseController');
const userController = require('../controllers/userController');
const workoutProgramController = require('../controllers/workoutController');

const jwtConfig = require('../config/jwtConfig');

router.get('/getExercises', exerciseController.getExercisePage);
router.post('/postExerciseProgram', exerciseController.createExerciseProgram);

router.post('/register', userController.register);
router.post('/authenticate', userController.authenticate);
router.get('/userprofile', jwtConfig.verifyJwtToken, userController.userProfile);

router.get('/getWorkouts', workoutProgramController.getAllWorkoutPrograms);
router.post('/postWorkoutProgram', workoutProgramController.createProgram);

module.exports = router;