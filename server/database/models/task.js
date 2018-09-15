const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const TaskSchema = new Schema({
  taskName: String,
  taskRate: Number,
  taskHours: Number,
  projectId: Schema.Types.ObjectId
});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
