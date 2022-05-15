const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    parentName: {
        type: String,
        required: 'ParentName can\'t be empty. Please specify which workoutprogram you would attach exercise to'
    },
    name: {
        type: String,
        required: 'ExerciseName can\'t be empty. Please enter the name of the exercise'
    },
    sets: {
        type: Number,
        required: 'Sets can\'t be empty. Please type the number of sets'
    },
    reps: {
        type: String,
        // required: 'Reps can\'t be empty. Please type the number of reps'
    },
    duration: {
        type: String,
        // required: 'Time can\'t be empty. Please Enter how long the exercise takes '
    },
    description: {
        type: String,
        required: 'Description can\'t be empty. Please enter the description'
    }
})

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;