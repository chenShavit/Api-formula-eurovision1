const router = require('express').Router();
const mongoose = require('mongoose');

const Flags = require('../db/flag');


router.get('/getAllFlags', function(req, res) {
    Flags.find({})
    .then(function(doc){
      res.json(doc);
  });
});
module.exports = router;
