const ErrorResponse = require('../../util/errorResponse');
const asyncHandler = require('../../middleware/async');
const Article = require('./model');

// @route : /api/v1/article/
// @req-type : POST
// @description : Add new article
exports.addArticle = asyncHandler(async (req, res, next)=>{
    const body = {
        title:req.body.title,
        typeOfArticle:req.body.typeOfArticle,
        companyName:req.body.companyName,
        description:req.body.description,
        articleTags:req.body.articleTags,
        author:{
            name:req.body.author.name,
            batch:req.body.author.batch,
            contact:{
                email:req.body.author.contact.email,
                linkedIn:req.body.author.contact.linkedIn,
                facebook:req.body.author.contact.facebook
            }
        }
    }
    const article = await Article.create(body);
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
    const articles = await Article.find({isAuthentic:true}).sort({_id:-1});
    return res.status(200).json({
            success: true,
            count:articles.length,
            articles,
    })
});

// @route : /api/v1/article/:article
// @req-type : GET
// @description : Get single article detail by article id
exports.getArticle = asyncHandler(async (req, res, next)=>{
    const article = await Article.find({_id: req.params.articleId , isAuthentic:true});
    if(article.length === 0)
            return next(new ErrorResponse(`No article with ${req.params.articleId} found !!`, 404));
    return res.status(200).json({
            success: true,
            article
    });
});


// @route : /api/v1/article/allCompanies
// @req-type : GET
// @description : Get all companies articles
exports.getAllCompanies = asyncHandler(async (req, res, next)=>{
    const allCompanies = await Article.find({isAuthentic:true});
    const data = []
    allCompanies.forEach((article) => {
        let company = article.companyName
        let isCompanyFound = false;
        for(let d of data){
            if(d.company === company){
                isCompanyFound = true;
                d.count++;
            }
        }
        if(!isCompanyFound){
            data.push({
                company,
                count:1
            })
        }
    })

    return res.status(200).json({
            success: true,
            data
    });
});


// @route : /api/v1/article/company/:companyName
// @req-type : GET
// @description : Get single article detail by companyName
exports.getCompanyArticles = asyncHandler(async (req, res, next)=>{
    const articles = await Article.find({companyName: req.params.companyName , isAuthentic:true});
    return res.status(200).json({
            success: true,
            articles
    });
});