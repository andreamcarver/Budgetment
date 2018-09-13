import React, { Component } from "react";
import axios from "axios";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      taskDescription: "",
      taskRatePerHour: 0
    };
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleCostChange = this.handleCostChange.bind(this);
  }

  render() {
    return <button onClick={submitTask}>Submit Task</button>;
  }
}
