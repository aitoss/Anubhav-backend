const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email address'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please add valid email address.'],
    },
    aitBatch: {
        type: Number
    },
    linkedIn: {
        type: String,
        required: [true, 'Please provide linkedIn'],
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('User', userSchema);
