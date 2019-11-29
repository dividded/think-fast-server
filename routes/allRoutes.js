const express = require('express');
const router = express.Router();
const answersRoute = require('./answersRoute');

router.use('/answer', answersRoute)

module.exports = router;