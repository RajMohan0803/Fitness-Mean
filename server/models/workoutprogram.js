
// var exerciseSchema = require('./exercise').schema;
const mongoose = require('mongoose');

const workoutProgramSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'WorkoutName can\'t be empty. Please enter a workoutname'
    },
    description: {
        type: String,
        required: 'Description can\'t be empty. Please enter the description'
    }, 
    exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'exercise.model' }]
});

const WorkoutProgram = mongoose.model('WorkoutProgram', workoutProgramSchema);

module.exports = WorkoutProgram;
