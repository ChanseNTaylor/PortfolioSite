"use strict";
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) =>
{
    res.sendFile("views/externals/callNotes/index.html", { root: "." });
});

module.exports = router;
