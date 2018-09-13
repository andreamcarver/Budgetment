import React, { Component } from "react";
import axios from "axios";
import Task from "./task";

class Project extends Component {
  render() {
    const aProject = this.props.data;
    console.log(this.props.handleExpand);
    return (
      <div>
        <h3>{aProject.projectTitle}</h3>
        <h5>${aProject.projectBudget}</h5>
        <h6>{new Date(aProject.projectDate).toDateString()}</h6>
        <button onClick={() => this.props.handleExpand(aProject._id)}>
          Expand
        </button>

        {this.props.expand ? aProject.tasks.map(t => <Task data={t} />) : null}
      </div>
    );
  }
}

export default Project;
