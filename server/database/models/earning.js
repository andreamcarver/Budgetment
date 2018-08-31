const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const EarningSchema = new Schema({
  earningPerHour: {
    type: Number
  },
  earningHours: {
    type: Number
  },
  earningTotal: Number,
  _id: Schema.Types.ObjectId
});

const Earning = mongoose.model("Earning", EarningSchema);
module.exports = Earning;
