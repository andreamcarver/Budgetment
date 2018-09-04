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

  // upon componet mounting
  componentDidMount() {
    this.updateProjectList();
  }
  async updateProjectList() {
    if (this.props.user) {
      const response = await axios.get(`/api/projects/${this.props.user._id}`);
      this.setState({ projects: response.data }); // the list of projects
    }
  }

  // TODO i might not need this function
  // handleNewProject  the program if cancel is hit on the alert
  async handleNewProject(event) {
    console.log("enter create new project");
    event.preventDefault();
    const message = prompt(
      "What is the name of the project that you'd like to add?"
    );
    if (!message) return;
    const projectTitle = message.valueOf();
    try {
      await axios.post("/api/projects", {
        projectTitle: projectTitle,
        userId: this.props.user._id
      });
      this.updateProjectList();
    } catch (err) {
      console.log("something went wrong adding Project", err);
    }
  }

  render() {
    const projectList = this.state.projects.map(aProject => {
      return (
        <div className="projectCard">
          <h3>{aProject.projectTitle}</h3>
        </div>
      );
    });

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
