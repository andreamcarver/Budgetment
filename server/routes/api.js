const express = require("express");
const Project = require("../database/models/project");
//const { Project, Task, Earning, Expense } = require("../database/models");
const router = express.Router();

router.get("/projects/:id", async (req, res, next) => {
  console.log("===== project!!======");
  console.log(req.params.id);
  //console.log(Project);
  try {
    // find all projects associated to a user Id
    const projects = await Project.find({ userId: req.params.id });

    for (project of projects) {
      project.tasks = await Task.find({ projectId: project._id });
    }
    console.log("projects =", projects);
    res.json = projects;
  } catch (err) {
    console.log("something went wrong", err);
  }
});

router.get("/tasks/:id", (req, res, next) => {
  console.log("TASK");
  console.log("Fetching task");
});

//POST route for projects
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

//POST route for tasks
router.post("/tasks", (req, res, next) => {
  try {
    console.log(req.body);
    res.json = Task.create(req.body);
  } catch (err) {}
  console.log(err);
});

//POST route for expenses
router.post("/expenses", (req, res, next) => {
  try {
    console.log(req.body);
    res.json = Expense.create(req.body);
  } catch (err) {}
  console.log(err);
});

//POST route for earnings
router.post("/earnings", (req, res, next) => {
  try {
    console.log(req.body);
    res.json = Earning.create(req.body);
  } catch (err) {}
  console.log(err);
});

module.exports = router;
