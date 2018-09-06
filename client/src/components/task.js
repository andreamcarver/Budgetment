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
      </div>
    );
  }
}

export default Task;
