const router = require('express').Router();
const mongoose = require('mongoose');

const sendError = require("./error");
const sendSuccess = require('./success');

const PointsFrom = require('../db/pointsFrom');
const PointsTo = require('../db/pointsTo');

const PointsFromByYear = require('../db/pointsFromByYear');
const PointsToByYear = require('../db/pointsToByYear');

router.post('/pointsByCountyAndYear', function(req, res) {
  let string_dir = req.body.string_dir;
  let year=req.body.year;
  let country=req.body.country;

  if((string_dir=="from") && (country=="") && (year==-1)){
    PointsFrom.find({})
    .then(function(doc){
      res.json(doc);
  });
}
if((string_dir=="to") && (country=="") && (year==-1)){
  PointsTo.find({})
    .then(function(doc){
      res.json(doc);
  });
  }  
  if((string_dir=="from") && (country!="") && (year>0)){
    PointsFromByYear.find({country:country,year:year}, function (err, data) {
      if (err) {
        res.send(500);
        return;
      }
      var data = JSON.stringify(data);
      var jsonData = JSON.parse(data)
       return res.json({
      voted: jsonData[0].voted
        });
      });
  }
  if((string_dir=="to") && (country!="") && (year>0)){
    PointsToByYear.find({country:country,year:year}, function (err, data) {
      if (err) {
        res.send(500);
        return;
      }
      var data = JSON.stringify(data);
      var jsonData = JSON.parse(data)
       return res.json({
      voted: jsonData[0].voted
        });
      });
  }
});
module.exports = router;
