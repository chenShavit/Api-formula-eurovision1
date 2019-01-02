const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PointsFormByYearSchema = new Schema({
   year:{
       type:Number
   },
   country: {
    type: String
  },
  voted_to: [
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

module.exports = mongoose.model('points_by_year_given_from',PointsFormByYearSchema);
