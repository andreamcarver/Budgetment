import React, { Component } from "react";
import axios from "axios";
import Task from "./task";

class Project extends Component {
  render() {
    const aProject = this.props.data;
    return (
      <div>
        <h3>{aProject.projectTitle}</h3>
        {aProject.tasks.map(t => (
          <Task data={t} />
        ))}
      </div>
    );
  }
}

export default Project;
