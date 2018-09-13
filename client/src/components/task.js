import React, { Component } from "react";
import axios from "axios";

class Task extends Component {
  render() {
    const theTask = this.props.data;
    return (
      <div>
        {theTask.taskName}
        <br />
        {theTask.taskDescription}
        <br />
        {theTask.taskRatePerHour}
        <button>Add</button>
        <button>Spend</button>
      </div>
    );
  }
}

export default Task;
