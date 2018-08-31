const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const ProjectSchema = new Schema({
  projectTitle: {
    type: String,
    required: true
  },
  userId: { type: Schema.Types.ObjectId, ref: "User" }
});

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
