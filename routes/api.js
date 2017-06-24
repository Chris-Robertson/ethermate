const express = require('express');
const router = express.Router();

// Get a list of exchanges from the database
router.get('/exchanges', function(req, res) {
  res.send({type: 'GET'});
});

// Add a new exchange to the database
router.post('/exchanges', function(req, res) {
  res.send({
    type: 'POST',
    name: req.body.name,
    minBuy: req.body.minBuy,
  });
});

// Update an exchange in the database
router.put('/exchanges/:id', function(req, res) {
  res.send({type: 'PUT'});
});

// Delete an exchange in the database
router.delete('/exchanges/:id', function(req, res) {
  res.send({type: 'DELETE'});
});

module.exports = router;
