"use strict";
const express = require('express');
const router = express.Router();

const comment = "Thanks for visiting my website!";

// GET home page
router.get('/', (req, res) => { res.render('index'); });

// GET resume page
router.get('/resume', (req, res) => { res.render('resume'); });

module.exports = router;
