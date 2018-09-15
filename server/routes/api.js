const express = require("express");
const Project = require("../database/models/project");
const Task = require("../database/models/task");
//const { Project, Task, Earning, Expense } = require("../database/models");
const router = express.Router();

router.get("/projects/:id", async (req, res, next) => {
  console.log("===== project!!======");
  console.log(req.params.id);
  try {
    // find all projects associated to a user Id
    const projects = await Project.find(
      { userId: req.params.id },
      "projectTitle projectBudget projectDate _id"
    ).lean();

    for (project of projects) {
      project.tasks = await Task.find(
        { projectId: project._id },
        "taskName taskHours taskRate"
      ).lean();
      project.actualBudget = 0;
      for (task of project.tasks) {
        project.actualBudget += task.taskHours * task.taskRate;
      }
    }
    console.log("projects =", projects);
    res.json(projects);
  } catch (err) {
    console.log("something went wrong", err);
  }
});

//POST route for projects
router.post("/projects", async (req, res, next) => {
  console.log("Creating a project using", req.body);
  try {
    console.log(req.body.projectBudget);
    res.json(await Project.create(req.body));
  } catch (err) {
    console.log("something went wrong creating a project", err);
  }
});

// tasks routes
router.get("/tasks/:id", (req, res, next) => {
  console.log(req.body);
  console.log("Fetching task");
});

//POST route for tasks
router.post("/tasks", async (req, res, next) => {
  try {
    console.log(req.body);
    res.json(await Task.create(req.body));
  } catch (err) {
    console.log("something went wrong creating a task", err);
  }
});

// routes for expenses
router.post("/expenses", async (req, res, next) => {
  try {
    console.log(req.body);
    res.json(await Expense.create(req.body).lean());
  } catch (err) {}
  console.log(err);
});

// POST route for earnings
router.post("/earnings", async (req, res, next) => {
  try {
    console.log(req.body);
    res.json(await Earning.create(req.body).lean());
  } catch (err) {}
  console.log(err);
});

module.exports = router;
