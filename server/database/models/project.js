const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const ProjectSchema = new Schema({
  projectTitle: {
    type: String,
    required: true
  },
  projectDescription: {
    type: String,
    required: false
  },
  projectBudget: {
    type: Number,
    required: true
  },
  projectDate: {
    type: Date,
    default: Date.now
  },
  userId: { type: Schema.Types.ObjectId, ref: "User" }
});

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
