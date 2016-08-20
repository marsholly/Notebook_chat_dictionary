const express = require('express')
const router = express.Router();

router.use('/notes', require('./notes'));
router.use('/dictionary', require('./dictionary'));

module.exports = router;
