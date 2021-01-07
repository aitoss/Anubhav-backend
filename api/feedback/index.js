const express = require('express');
const {postFeedback, getFeedbacks} = require('./controller');

const router = express.Router();
router.route('/').post(postFeedback).get(getFeedbacks);

module.exports = router;
