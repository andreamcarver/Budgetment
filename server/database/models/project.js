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

Project.methods({
  addProject: function(){
    try{
      await axios.post("/api/projects", {
        projectTitle: "test",
        userId: "1234"
      })
    }
    catch(err){
      console.log("something went wrong")
    }
  } 
})


const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
