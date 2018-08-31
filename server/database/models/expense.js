const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const ExpenseSchema = new Schema({
  expenseName: {
    type: String
  },
  expenseDescription: {
    type: String
  },
  expenseCost: Number,
  _id: Schema.Types.ObjectId
});

const Expense = mongoose.model("Expense", ExpenseSchema);
module.exports = Expense;
