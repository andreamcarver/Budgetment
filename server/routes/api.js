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

    // for (project of projects) {
    //   project.tasks = await Task.find({ projectId: project._id });
    // }
    console.log("projects =", projects);
    res.json = projects;
  } catch (err) {
    console.log("something went wrong", err);
  }
});

//POST route for projects
router.post("/projects", async (req, res, next) => {
  console.log("Creating a project using", req.body);
  try {
    res.json = await Project.create(req.body);
  } catch (err) {
    console.log("something went wrong creating a project");
  }
});

// tasks routes

router.get("/tasks/:id", (req, res, next) => {
  console.log("TASK");
  console.log("Fetching task");
});

//POST route for tasks
router.post("/tasks", async (req, res, next) => {
  try {
    console.log(req.body);
    res.json = await Task.create(req.body);
  } catch (err) {
    console.log("something wen wrong creating a task", err);
  }
});

// routes for expenses
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
