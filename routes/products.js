const express = require('express');
const router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a products JSON');
});

module.exports = router;
