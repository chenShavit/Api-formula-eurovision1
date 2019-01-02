const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var PointsFormSchema = new Schema({
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

module.exports = mongoose.model("all_points_given_from", PointsFormSchema);
