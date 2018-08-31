const express = require("express");
var Project = require("../database/models/project");
const router = express.Router();
var Task = require("../database/models/task");

router.get("/projects/:id", (req, res, next) => {
  console.log("===== project!!======");
  console.log(req.project);
  console.log(req.id);
  if (req.project) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

// find all projects associated to a user Id
Project.find({ userId: Number }, function(err, projects) {
  if (err) return console.log(err);
  else console.log(projects);
  // ‘projects’ contains the list of projects that match the criteria.
});

router.post("/projects", (req, res, next) => {
  console.log(req.body);
  console.log("Hello");
  Project.create(req.body),
    function(err, project) {
      if (err) return console.log(err);
      res.json = project;
      //returns project just for funsies
    };
});

// router.post("/projects", (req, res, next) => {
//   try {
//     console.log("Hello");
//     console.log(req.body);
//     res.json = Project.create(req.body);
//   } catch (err) {}
//   handleError(err);
// });

router.post("/task", (req, res, next) => {
  try {
    console.log(req.body);
    res.json = Task.create(req.body);
  } catch (err) {}
  console.log(err);
});

module.exports = router;
