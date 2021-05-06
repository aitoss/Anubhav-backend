/* eslint-disable no-useless-escape */
const mongoose = require('mongoose');

const reqArticleSchema = new mongoose.Schema({
    article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    },
    feedback: {
        type: String,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Feedback', reqArticleSchema);
