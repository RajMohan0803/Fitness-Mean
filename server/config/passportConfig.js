var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

// Load User model
var User = require('../models/user');

passport.use(
    new localStrategy({ usernameField: 'email' },
        (username, password, done) => {
            User.findOne({ email: username },
                (err, user) => {
                    if (err) {
                        return done(err);

                    }
                    else if (!user) {
                        return done(null, false, { message: 'Email is not registered' });
                    }
                    else if (!user.verifyPassword(password)) {
                        return done(null, false, { message: 'Password is not the same. Try again.' });
                    }
                    else {
                        return done(null, user);
                    }
                });
        })

);