const express = require('express');
const router = express.Router();
const { create } = require('../controllers/blog');
const { requireSignin, adminMiddleware } = require('../controllers/auth');
router.post('/', requireSignin, adminMiddleware, create);

module.exports = router;
