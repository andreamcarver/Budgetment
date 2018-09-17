import React, { Component } from "react";
import axios from "axios";
import TaskForm from "./tasks";

class Task extends Component {
  render() {
    const theTask = this.props.data;
    return (
      <div class="taskcard">
        <p>
          <h5>{theTask.taskName}</h5>
          Date of Task: {new Date(theTask.taskDate).toDateString()}
          <br />
          Rate per Hour: ${theTask.taskRate}
          <br />
          Hours Worked: {theTask.taskHours}
          <br />
          Total Earned from Task: ${theTask.taskRate * theTask.taskHours}
          <br />
          Edit Task / Delete Task
        </p>
      </div>
    );
  }
}

export default Task;
