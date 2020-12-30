const express = require('express');
const {addArticle,getArticles,getArticle,getAllCompanies,getCompanyArticles, authenticateArticle} = require('./controller');

const router = express.Router();
router.route('/').post(addArticle).get(getArticles);
router.route('/getAllCompanies').get(getAllCompanies)
router.route('/company/:companyName').get(getCompanyArticles)
router.route('/verify/:encryptedString').get(authenticateArticle)
router.route('/:articleId').get(getArticle)

module.exports = router;
