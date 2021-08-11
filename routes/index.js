var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/test", function (req, res, next) {
  res.json({ text: "this comes from Rahtiapp" });
});

router.get("/secret", function (req, res, next) {
  res.json({ secret: process.env.SECRET });
});

module.exports = router;
