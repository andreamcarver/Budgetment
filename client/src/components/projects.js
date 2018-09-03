import React, { Component } from "react";
import axios from "axios";
//TO GRAB USER ID, USE this.props.userId

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
    console.log("in construct", props);
    this.handleNewProject = this.handleNewProject.bind(this);
    console.log("this ", this.props);
  }

  //upon componet mounting
  async componentDidMount() {
    const user = this.props.userId;
    this.state.projects = await axios.get(`/api/projects/${user}`);
  }

  //TODO i might not need this function
  // handleNewProject  the program if cancel is hit on the alert
  async handleNewProject(event) {
    console.log("Hi");
    event.preventDefault();
    let message = prompt(
      "What is the name of the project that you'd like to add?"
    ).valueOf();
    try {
      console.log("props =", this.props);
      await axios.post("/api/projects", {
        projectTitle: message,
        userId: this.props.userId
      });
    } catch (err) {
      console.log("something went wrong", err);
    }
    console.log(message);
  }

  async addNewProject(data) {
    try {
      await axios.post("/api/projects", {
        projectTitle: data.projectTitle,
        userId: this.props.userId
      });
    } catch (err) {
      console.log("something went wrong");
    }
  }

  async getProject(data) {
    try {
      await axios.get("api/projects", {
        // console.log("Working")
      });
    } catch (err) {
      console.log("error");
    }
  }

  async addNewTask(data) {
    try {
      await axios.post("/api/tasks", {
        taskTitle: data.taskTitle
      });
    } catch (err) {
      console.log("error");
    }
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
    const projectList = this.state.projects.map(aProject => {
      return;
      <div className="projectCard">
        <h3>{aProject.projectTitle}</h3>
        {aProject.tasks.map(aTask => {
          return;
          <h5>{aTask.taskName}</h5>;
        })}
      </div>;
    });

    // const projectList = this.state.projects.map(aProject => {
    //   return;
    //   <div className="projectCard">
    //     <h3>{aProject.projectTitle}</h3>
    //   </div>;
    // });
    // const taskList = this.state.tasks.map(aTask => {
    //   return;
    //   <h5>{aTask.taskName}</h5>;
    // });

    return (
      <container>
        <h1>Your Projects</h1>
        <button onClick={this.handleNewProject}>Add New Project</button>
        {projectList}
      </container>
    );
  }
}

export default Project;
