const mongoose = require('mongoose');

const Exercise = mongoose.model('Exercise');
const WorkoutProgram = mongoose.model('WorkoutProgram');

module.exports.getExercisePage = (req, res, next) => {
    Exercise.find((err, exercise) => {
        if (err)
            console.log(err);
        else
            res.json(exercise);
    });
}

module.exports.createExerciseProgram = (req, res, next) => {
    // let exercise = new Exercise(req.body);
    let newExercise = new Exercise({
        parentName: req.body.parentName,
        name: req.body.name,
        sets: req.body.sets,
        reps: req.body.reps,
        description: req.body.description,
        duration: req.body.duration
    });
    newExercise
        .save()
        .then(() => {

            // Add exercise to designated Workout Program
            WorkoutProgram.findOne({ name: newExercise.parentName }).then(WorkoutProgram => {
                WorkoutProgram.exercises.push(newExercise);
                WorkoutProgram.save();
            }).catch(err => {
                res.status(400).send('Failed to create new exercise11111');
            });


        })
        .then(exercise => {
            res.status(200).json({ 'exercise': 'Added successfully' });
        })
        .catch(err => {
            res.status(400).send('Failed to create new exercise');
        });
}