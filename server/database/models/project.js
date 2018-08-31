const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

const ProjectSchema = new Schema({
  projectTitle: {
    type: String,
    unique: true
  },
  tasks: {
    type: Array
  },
  _id: Schema.Types.ObjectId
});

ProjectSchema.methods = {
  viewProject: function() {
    var project = this.projectTitle;
    var tasks = this.tasks;
  },
  createProject: function() {
    var newproject = this.projectTitle;
  }
};

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
