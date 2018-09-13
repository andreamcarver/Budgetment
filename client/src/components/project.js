import React, { Component } from "react";
import axios from "axios";
import Task from "./task";

class Project extends Component {
  render() {
    const aProject = this.props.data;
    return (
      <div>
        <h3>{aProject.projectTitle}</h3>
        <h5>${aProject.projectBudget}</h5>
        <h6>{new Date(aProject.projectDate).toDateString()}</h6>
        {aProject.tasks.map(t => (
          <Task data={t} />
        ))}
      </div>
    );
  }
}

export default Project;
