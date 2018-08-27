import React, { Component } from "react";
import axios from "axios";

class Project extends Component {
  constructor() {
    super();
    this.state = {
      project: ""
    };
  }

  //testing data, need to change it from hardcode to reading the database
  data = {
    test: "test",
    description: "test description",
    tasks: ["water the plants, ", "cook"]
  };

  //handleNewProject crashes the program if cancel is hit on the alert
  handleNewProject(event) {
    console.log("Hi");
    let message = prompt(
      "What is the name of the project that you'd like to add?"
    ).valueOf();
    event.preventDefault();
    console.log(message);
  }

  handleNewTask(event) {
    console.log("project");
  }

  //   constructor() {
  //     super();
  //     this.state = {
  //       project: ""
  //     };
  //   }
  render() {
    return (
      <container>
        <h1>Your Projects</h1>
        <button onClick={this.handleNewProject}>Add New Project</button>

        <div className="projectCard">
          <h3>{this.data.test}</h3>
          <div>
            <h4>{this.data.description}</h4>
            <h4>Tasks: {this.data.tasks}</h4>
            <li>{this.datalistItems}</li>
          </div>
        </div>
        <div className="projectCard">
          <h3>Babysitting</h3>
          <div>
            <h4>Watching the kids for Bob and Julie</h4>
          </div>
          <div>
            <button onClick={this.handleNewTask}>Add Task</button>
          </div>
        </div>
        <div className="projectCard">
          <h3>Freelance</h3>
          <div>
            <h4>Freelance Web Dev for Drupal</h4>
          </div>
          <div>
            <button>Add Task</button>
            <button id="myBtn">Open Modal</button>
          </div>
        </div>
      </container>
    );
  }
}

export default Project;
