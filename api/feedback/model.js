/* eslint-disable no-useless-escape */
const mongoose = require('mongoose');

const reqArticleSchema = new mongoose.Schema({
    article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article',
        required: [true, 'Please write an article first to give a review !']
    },
    feedback: {
        type: String,
        required: [true, 'Feedback message is required'],
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
});

module.exports = mongoose.model('Feedback', reqArticleSchema);
