const express = require('express');
const router = express.Router();
const {Exercises,Users} = require('../models');

// get all exercise
router.get('/', async (req, res) => {
    res.render('all', {Exercises});
});

// get one exercise
router.get('/exercises/:num', async (req, res) => {
    return res.render('exercises', exercise[req.params.num - 1]);
});





module.exports = router;



