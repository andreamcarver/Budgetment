import React, { Component } from "react";
import axios from "axios";
import TaskForm from "./tasks";

class Task extends Component {
  render() {
    const theTask = this.props.data;
    return (
      <div>
        {theTask.taskName}
        <br />
        Rate per Hour: ${theTask.taskRate}
        <br />
        Hours Worked: {theTask.taskHours}
        <br />
        <button>Add</button>
        <button>Spend</button>
      </div>
    );
  }
}

export default Task;
