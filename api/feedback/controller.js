const ErrorResponse = require('../../util/errorResponse');
const asyncHandler = require('../../middleware/async');
const Feedback = require('./model');

// @route : /api/v1/request/
// @req-type : POST
// @description : Request an article
exports.postFeedback = asyncHandler(async (req, res, next)=>{
    const feedback = await Feedback.create(req.body);
    return res.status(200).json({
        success: true,
        feedback
    });

});

exports.getFeedbacks = asyncHandler(async (req, res, next)=>{
    const feedbacks = await Feedback.find();
    return res.status(200).json({
        success: true,
        feedbacks
    });
});