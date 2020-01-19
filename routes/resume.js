"use strict";
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>
{
    res.render("resume", { comment: "Thank you for viewing my resume!" });
});

module.exports = router;
