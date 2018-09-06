import React, { Component } from "react";
import axios from "axios";
import Project from "./project";
//TO GRAB USER ID, USE this.props.userId

class Projects extends Component {
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
        <div>
          <h3>{aProject.projectTitle}</h3>
          <div className="projectCard">
            {aProject.tasks.map(aTask => {
              return (
                <div>
                  {aTask.taskName} <br /> {aTask.taskDescription}
                </div>
              );
            })}

            <button>View/Add Project Details</button>
            <p>
              <button>Delete Project</button>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h1>Your Projects</h1>
        <button onClick={this.handleNewProject}>Add New Project</button>
        {this.state.projects.map(p => {
          return <Project data={p} />;
        })}
      </div>
    );
  }
}

export default Projects;
