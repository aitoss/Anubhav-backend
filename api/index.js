const express = require('express');
const router = express.Router();

// route files
const article = require('./article');
const auth = require('./auth');
const user = require('./user');
const requestArticle = require('./request_article')
const feedback = require('./feedback');

router.use('/article', article);
router.use('/auth', auth);
router.use('/user', user);
router.use('/request', requestArticle);
router.use('/feedback', feedback);

module.exports = router;
