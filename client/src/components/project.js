import React, { Component } from "react";
import axios from "axios";
import Task from "./task";

class Project extends Component {
  render() {
    const aProject = this.props.data;
    console.log(this.props.handleExpand);
    return (
      <div className="projectCard">
        <h3 class="titlecard">
          {aProject.projectTitle}
          <span className="projectDate">
            <span>Created </span>
            {new Date(aProject.projectDate).toDateString()}
          </span>
        </h3>
        <h5 class="budgetcard">
          Estimated Budget: ${aProject.projectBudget}
          <br /> Actual Budget: ${aProject.actualBudget}
        </h5>
        <div class="taskinfo">
          {this.props.expand
            ? aProject.tasks.map(t => <Task data={t} />)
            : null}
        </div>
        <button
          class="taskbutton icons btn btn-primary"
          onClick={() => this.props.handleExpand(aProject._id)}
        >
          Show Tasks
        </button>
        <button
          class="taskbutton icons btn btn-primary"
          onClick={event => this.props.handleAddTask(event, aProject._id)}
        >
          Add Task
        </button>
        <button class="taskbutton icons btn btn-primary">Delete Poject</button>
      </div>
    );
  }
}

export default Project;
