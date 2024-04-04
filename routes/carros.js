const express = require('express');
const router = express.Router();
const carros = require('../assets/carros.json')

// @Route   GET api/person/
// @desc    Get all persons
// @access  Public
router.get('/', (req, res) => {
  return res.json(carros);
});

module.exports = router;
