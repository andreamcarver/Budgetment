import React, { Component } from "react";
import axios from "axios";

class TaskForm extends Component {
  constructor() {
    super();
    this.state = {
      taskName: "",
      taskHours: "",
      taskRate: "",
      modalIsOpen: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClick = () => {
    console.log("this is", this);
    alert("testing!");
  };
  state = { show: false };
  showModal = () => {
    this.setState({ show: true });
    console.log("testing!");
  };
  hideModal = () => {
    this.setState({ show: false });
  };

  async handleSubmit(event) {
    event.preventDefault();

    try {
      console.log("saving new task");
      const response = await axios.post("/api/tasks", {
        taskName: this.state.taskName, //budgetname
        taskHours: this.state.taskHours, //budget desc
        taskRate: this.state.taskRate, //budget amount
        projectId: this.props.projectId //user id for database access
      });
      this.props.dismissDialog();
      // dismiss dialog and refres project list

      // update the state to redirect to home
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    // return this.state.redirectTo ? (
    //   <Redirect to={{ pathname: this.state.redirectTo }} />
    // ) :
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
      borderRadius: 5,
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
          <h4>Task Info</h4>
          <form className="form-horizontal">
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="project">
                  Task Name
                </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input
                  className="form-input"
                  type="text"
                  id="taskName"
                  name="taskName"
                  placeholder="taskName"
                  value={this.state.taskName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label">Charge per Hour</label>
              </div>
              <div className="col-3 col-mr-auto">
                <input
                  className="form-input"
                  placeholder="taskRate"
                  type="taskRate"
                  name="taskRate"
                  value={this.state.taskRate}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label">Hours Worked</label>
              </div>
              <div className="col-3 col-mr-auto">
                <input
                  className="form-input"
                  placeholder="taskHours"
                  type="taskHours"
                  name="taskHours"
                  value={this.state.taskHours}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group ">
              <div className="col-7" />
              <button
                className="btn btn-primary col-1 col-mr-auto"
                onClick={this.handleSubmit}
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
