/* eslint-disable no-useless-escape */
const mongoose = require('mongoose');

const reqArticleSchema = new mongoose.Schema({
    requesterName: {
        type: String,
        trim:true,
        required: [true, 'Please provide requester name'],
    },
    requesteeName: {
        type: String,
        required: [true, 'Provide Requestee Name'],
    },
    requesteeContact: {
        type: String,
        required: [true, 'Please provide some direct contact to the requestee'],
    },
    requesterEmail: {
        type: String,
        required: [true, 'Please provide your email address'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please add valid email address.'],
    },
    note:{
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('ReqArticle', reqArticleSchema);
