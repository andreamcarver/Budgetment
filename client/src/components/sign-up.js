import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmPassword: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  async handleSubmit(event) {
    console.log("sign-up handleSubmit, username: ");
    console.log(this.state.username);
    event.preventDefault();

    try {
      // request to server to add a new username/password
      const response = await axios.post("/user/", {
        username: this.state.username,
        password: this.state.password
      });
      console.log(response);
      if (!response.data.errmsg) {
        console.log("successful signup");
        // redirect to login page
        this.setState({ redirectTo: "/login" });
      } else {
        console.log("username already taken");
      }
    } catch (err) {
      console.log("signup error: ", err);
    }
  }

  render() {
    return (
      <div className="SignupForm">
        <h4>Sign up</h4>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="username">
                Username
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="password">
                Password:{" "}
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                placeholder="password"
                type="password"
                name="password"
                value={this.state.password}
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
              Sign up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
