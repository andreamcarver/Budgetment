import React, { Component } from "react";
import axios from "axios";

class ProjectForm extends Component {
  constructor() {
    super();
    this.state = {
      projectName: "",
      projectDescription: "",
      projectBudget: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    try {
      console.log("saving new budget");
      const response = await axios.post("/api/projects", {
        projectTitle: this.state.projectTitle, //budgetname
        projectDescription: this.state.projectDescription, //budget desc
        projectBudget: this.state.projectBudget, //budget amount
        userId: this.props.user._id //user id for database access
      });
      this.props.dismissDialog();
      // dismiss dialog and refres project list

      // update the state to redirect to home
    } catch (err) {
      console.log(err);
    }
  }

  async handleCancel(event) {
    event.preventDefault();
    this.props.dismissDialog();
  }

  render() {
    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: "#fff",
      borderRadius: 15,
      maxWidth: 500,
      minHeight: 300,
      margin: "0 auto",
      padding: 30
    };

    if (!this.props.show) {
      return null;
    }
    return (
      <div style={backdropStyle}>
        <div style={modalStyle}>
          <h4>Project Info</h4>
          <form className="form-horizontal">
            <div className="form-group">
              <div>
                <label className="form-label" htmlFor="project">
                  Project Name
                </label>
              </div>
              <div className="col-6 col-mr-auto">
                <input
                  className="form-input"
                  type="text"
                  id="projectTitle"
                  name="projectTitle"
                  placeholder="ProjectTitle"
                  value={this.state.projectTitle}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-6 col-mr-auto">
                <label className="form-label">Project Description</label>
              </div>
              <div>
                <input
                  className="form-input"
                  placeholder="projectDescription"
                  type="projectDescription"
                  name="projectDescription"
                  value={this.state.projectDescription}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div>
                <label className="form-label">Budget Amount</label>
              </div>
              <div className="col-6 col-mr-auto">
                <input
                  className="form-input"
                  placeholder="projectBudget"
                  type="projectBudget"
                  name="projectBudget"
                  value={this.state.projectBudget}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <p />
            <div className="form-group ">
              {/* <div className="col-7" /> */}
              <button
                className="btn btn-primary col-3 col-mr-auto"
                onClick={this.handleSubmit}
                type="submit"
              >
                Save
              </button>
              <button
                className="btn btn-primary col-3"
                onClick={this.handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ProjectForm;
