const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var FlagsSchema = new Schema({
  country: {
    type: String
  },
});
module.exports = mongoose.model("country_flag", FlagsSchema);
