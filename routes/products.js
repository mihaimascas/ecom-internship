const express = require('express');
const router = express.Router();

const productController = require('../controllers/products.controller');

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.send(productController.getAll());
});

/* GET products listing. */
router.get('/search/:query', function(req, res, next) {
  const { query } = req.params;
  res.send(productController.search(query));
});

module.exports = router;
