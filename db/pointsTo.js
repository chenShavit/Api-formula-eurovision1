const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PointsToSchema = new Schema({
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

module.exports = mongoose.model("all_points_given_to", PointsToSchema);

