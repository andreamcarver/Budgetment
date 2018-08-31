const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

const TaskSchema = new Schema({
  taskName: String,
  taskDescription: String,
  _id: Schema.Types.ObjectId
});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
