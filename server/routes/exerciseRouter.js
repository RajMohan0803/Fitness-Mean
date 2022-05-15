const express = require('express');
const router = express.Router();

const exerciseController = require('../controllers/exerciseController');
const jwtConfig = require('../config/jwtConfig');

router.get('/getExercises', exerciseController.getExercisePage);
router.post('/postExerciseProgram', exerciseController.createExerciseProgram);

module.exports = router;