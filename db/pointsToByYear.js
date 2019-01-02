const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PointsToByYearSchema = new Schema({
    year:{
        type:Number
    },
    country: {
     type: String
   },
   voted_from: [
     {
       country: {
         type: String
       },
       points: {
         type: Number
       }
     }
   ]
 });

module.exports = mongoose.model('points_by_year_given_to',PointsToByYearSchema);