var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next)
{
    res.sendFile("views/externals/adventure-game/index.html", { root: "." });
});

module.exports = router;
