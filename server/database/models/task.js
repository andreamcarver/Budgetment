const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const TaskSchema = new Schema({
  taskName: String,
  taskDescription: String,
  taskRatePerHour: Number,
  projectId: Schema.Types.ObjectId,
  _id: Schema.Types.ObjectId
});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
