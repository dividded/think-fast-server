const express = require('express');
const router = express.Router();

const ANSWERS = {
    "Vanilla": 1 ,
    "Chocolate": 1,
    "Strawberry": 2,
    "Coffee": 2,
    "Cookie": 2,
    "Cherry": 3,
    "Mango": 3
};

router.get('/', function(req, res, next) {
    res.json(ANSWERS)
});

module.exports = router;
