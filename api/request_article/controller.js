const ErrorResponse = require('../../util/errorResponse');
const asyncHandler = require('../../middleware/async');
const ReqArticle = require('./model');

// @route : /api/v1/request/
// @req-type : POST
// @description : Request an article
exports.reqArticle = asyncHandler(async (req, res, next)=>{
    const body = {
        requesterName: req.body.requesterName,
        requesteeName: req.body.requesteeName,
        requesteeContact: req.body.requesteeContact,
        company: req.body.company,
        note: req.body.note
    }
    await ReqArticle.create(body);
    return res.status(200).json({
        success: true,
        message: 'Request noted successfully !'
    });
});

exports.getAllRequests = asyncHandler(async (req, res, next)=>{
    const requests = await ReqArticle.find();
    return res.status(200).json({
        success: true,
        requests
    });
});
