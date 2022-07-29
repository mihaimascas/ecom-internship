const express = require('express');
const router = express.Router();

/* GET products in cart */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add/:productId', function(req, res, next) {
  const { productId } = req.params;
  res.send(`Added to cart dss ${productId}`);
});



module.exports = router;
