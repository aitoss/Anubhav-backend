const express = require('express');
const {addArticle,getArticles,getArticle,getAllCompanies,getCompanyArticles, authenticateArticle,getArticlesByTag} = require('./controller');

const router = express.Router();
router.route('/').post(addArticle).get(getArticles);
router.route('/tags').post(getArticlesByTag)
router.route('/getAllCompanies').get(getAllCompanies)
router.route('/company/:companyName').get(getCompanyArticles)
router.route('/verify/:encryptedString').get(authenticateArticle)
router.route('/:articleId').get(getArticle)


module.exports = router;
