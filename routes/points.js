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
    PointsFrom.find({}, function (err, data) {
      if (err) {
        res.send(500);
        return;
      }
      var data = JSON.stringify(data);
      var jsonData = JSON.parse(data);
      var total_points=0;
      for( var j=0; j<jsonData.length;j++){
        for( var i=0;i<jsonData[j].voted_to.length;i++){
         total_points+= jsonData[j].voted_to[i].points
        }
      }
      for( var j=0; j<jsonData.length;j++){
      for( var i=0;i<jsonData[j].voted_to.length;i++){
       jsonData[j].voted_to[i].points=Math.ceil(((jsonData[j].voted_to[i].points/total_points)*100));
      }
    }
       return res.json(jsonData);

});
}
if((string_dir=="to") && (country=="") && (year==-1)){
  PointsTo.find({}, function (err, data) {
    if (err) {
      res.send(500);
      return;
    }
    var data = JSON.stringify(data);
    var jsonData = JSON.parse(data);
    var total_points=0;
    for( var j=0; j<jsonData.length;j++){
      for( var i=0;i<jsonData[j].voted_from.length;i++){
       total_points+= jsonData[j].voted_from[i].points
      }
    }
    for( var j=0; j<jsonData.length;j++){
    for( var i=0;i<jsonData[j].voted_to.length;i++){
     jsonData[j].voted_from[i].points=Math.ceil(((jsonData[j].voted_from[i].points/total_points)*100));
    }
  }
     return res.json(jsonData);

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
