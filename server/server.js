require("./config/config");
require("./models/db");
require("./config/passportConfig");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const flash = require("connect-flash");

/* const userRouter = require('./routes/userRouter');
const workoutRouter = require('./routes/workoutRouter');
const exerciseRouter = require('./routes/exerciseRouter'); */

var indexRouter = require("./routes/indexRouter");

var app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

// Routes
/* app.use('/api', userRouter);
app.use('/api', workoutRouter);
app.use('/api', exerciseRouter); */

app.use("/api", indexRouter);

app.use(flash());

// Global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    next();
});

// error handler
app.use((err, req, res, next) => {
    if (err.name === "ValidationError") {
        var valErrors = [];
        Object.keys(err.errors).forEach((key) =>
            valErrors.push(err.errors[key].message)
        );
        res.status(422).send(valErrors);
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});