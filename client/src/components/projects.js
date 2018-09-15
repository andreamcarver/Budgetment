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
      show: [],
      modalIsOpen: false,
      taskModalIsOpen: false
    };
    console.log("in construct", props);
    this.handleNewProject = this.handleNewProject.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
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

  async handleNewProject(event) {
    console.log("enter create new project");
    event.preventDefault();
    this.setState({ modalIsOpen: true });
  }

  foo() {
    this.setState({ modalIsOpen: false });
    this.updateProjectList();
  }

  //IS this gonna work??
  async handleNewTask(event) {
    console.log("creating new task");
    event.preventDefault();
    this.setState({ taskModalIsOpen: true });
  }

  async handleExpand(id) {
    console.log("Expanding", id);
    //index is equal to indexOf id; if its -1, id does not exist in the array
    const index = this.state.show.indexOf(id);
    let newShow = Array.from(this.state.show);
    if (index != -1) {
      //if index is not equal to -1, collapse task info via splice
      newShow.splice(index, 1);
    } else {
      //otherwise expand task info
      newShow.push(id);
    }
    this.setState({ show: newShow });
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
          const id = p._id;
          return (
            <Project
              data={p}
              expand={this.state.show.includes(id)}
              handleExpand={this.handleExpand}
            />
          );
        })}
      </div>
    );
  }
}

export default Projects;
