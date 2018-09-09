import React, { Component } from "react";
import axios from "axios";
import Project from "./project";
import ProjectForm from "./project-form";
//TO GRAB USER ID, USE this.props.userId

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      modalIsOpen: false
    };
    console.log("in construct", props);
    this.handleNewProject = this.handleNewProject.bind(this);
    this.foo = this.foo.bind(this);
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
    this.setState({ modalIsOpen: true });
  }
  foo() {
    this.setState({ modalIsOpen: false });
    this.updateProjectList();
  }

  render() {
    return (
      <div>
        <ProjectForm
          user={this.props.user}
          show={this.state.modalIsOpen}
          dismissDialog={this.foo}
        />
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
