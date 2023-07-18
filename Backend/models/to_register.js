const mongoose = require('mongoose');

const newuser = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    Qualifications: {
        type: String,
        enum: ['UG', 'PG'],
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('registered users', newuser);

module.exports = User;
