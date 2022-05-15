const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name can\'t be empty. Enter your name'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty. Enter your email',
        unique: true
    },
    password: {
        type: String,
        required: 'Password can\'t be empty. Enter your password',
        minlength: [6, 'Password must atleast be 6 characters']
    },
    saltSecret: String
});

// Custom validation for email
userSchema.path('email').validate((val) => {
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.'); 



// Pre-event - Password Encryption
userSchema.pre('save', function (next) {
    console.log('test1')
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
}) 


userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPTIME
        });
}

const User = mongoose.model('User', userSchema);

module.exports = User;