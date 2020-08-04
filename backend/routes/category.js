const express = require('express');
const router = express.Router();
const { create } = require('../controllers/category');


// validators
const { runValidation } = require('../validators');
const { categoryCreateValidator } = require('../validators/category');

const { requireSignin, adminhMiddleware } = require('../controllers/auth');


router.post('/category', categoryCreateValidator, runValidation, requireSignin, adminhMiddleware, create);


module.exports = router;
