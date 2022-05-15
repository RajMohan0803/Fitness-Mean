const mongoose = require('mongoose');

const WorkoutProgram = mongoose.model('WorkoutProgram');
// import WorkoutProgram from '../models/workoutprogram';

module.exports.getAllWorkoutPrograms = (req, res, next) => {
    WorkoutProgram.find((err, workout) => {
        if (err)
            console.log(err);
        else
            res.json(workout);
    })
}

/* module.exports.getSpecificWorkoutProgram = (req, res, next) => {
    WorkoutProgram.findById(req.params.id, (err, workout) => {
        if (err)
            console.log(err);
        else
            res.json(workout);
    })
} */

module.exports.createProgram = (req, res, next) => {
    let workout = new WorkoutProgram(req.body);
    workout.save()
        .then(workout => {
            res.status(200).json({ 'workout': 'Added successfully' });
        })
        .catch(err => {
            res.status(400).send('Failed to create a new workoutprogram');
        });
}
