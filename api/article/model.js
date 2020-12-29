/* eslint-disable no-useless-escape */
const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        trim:true,
        required: [true, 'Please provide a Title of Article'],
    },
    typeOfArticle: {
        type: String,
        enum: ['Internship', 'FullTime'],
        required: [true, 'Please provide a Type of Experince'],
    },
    companyName: {
        type: String,
        required: [true, 'Please provide your comapny name'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    description:{
        type: String,
        trim: true,
        required: [true, 'Please provide your Experience in detail'],
    },
    articleTags:{
        type:[String],
    },
    isAuthentic:{
        type: Boolean,
        default: false
    },
    author:{
        name:{
            type: String
        },
        batch:{
            type: Number
        },
        contact:{
            email: {
                type: String,
                required: [true, 'Please provide an email address'],
                unique: true,
                lowercase: true,
                trim: true,
                match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please add valid email address.'],
            },
            mobile: {
                type: Number,
                validate: {
                    validator: function(v) {
                        return /d{10}/.test(v);
                    },
                    message: '{VALUE} is not a valid 10 digit number!'
                }
            },
            linkedIn:{
                type: String
            },
            facebook:{
                type: String
            },
            instagram:{
                type: String
            },
            twitter:{
                type: String
            }
        }
    }
});

module.exports = mongoose.model('Article', articleSchema);
