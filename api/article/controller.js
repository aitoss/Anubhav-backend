const ErrorResponse = require('../../util/errorResponse');
const asyncHandler = require('../../middleware/async');
const Article = require('./model');


// @route : /api/v1/article/
// @req-type : POST
// @description : Add new article
exports.addArticle = asyncHandler(async (req, res, next)=>{
    const article = await Article.create(req.body);
    return res.status(200).json({
            success: true,
            message: 'Article added successfully',
            article
    })
});



// @route : /api/v1/article/
// @req-type : GET
// @description : Get all articles
exports.getArticles = asyncHandler(async (req, res, next)=>{
    const articles = await Article.find({}).sort({_id:-1});
    return res.status(200).json({
            success: true,
            articles
    })
});


// @route : /api/v1/article/:article
// @req-type : GET
// @description : Get single article detail by article id
exports.getArticle = asyncHandler(async (req, res, next)=>{
    const article = await Article.findById(req.params.articleId);
    if(!article)
            return next(new ErrorResponse(`No article with ${req.params.articleId} found !!`, 404));
    return res.status(200).json({
            success: true,
            article
    });
});

