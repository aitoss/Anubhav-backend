const express = require('express');
const {reqArticle, getAllRequests} = require('./controller');

const router = express.Router();
router.route('/').post(reqArticle);
// router.route('/').get(getAllRequests);

module.exports = router;
