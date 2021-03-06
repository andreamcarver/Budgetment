import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class Navbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  async logout(event) {
    event.preventDefault();
    console.log("logging out");
    try {
      const response = await axios.post("/user/logout");
      console.log(response.data);
      this.props.updateUser({ user: null });
    } catch (err) {
      console.log("Logout error", err);
    }
  }

  render() {
    console.log("current user ***", this.props.user);
    const loggedIn = this.props.user != null;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <div>
        <header className="navbar App-header" id="nav-container">
          <div className="col-4" class="navlinks">
            {loggedIn ? (
              <section className="navbar-section">
                <Link to="/" className="btn btn-link text-secondary">
                  <span className="text-secondary">home</span>
                </Link>
                <Link to="/projects" className="btn btn-link text-secondary">
                  <span className="text-secondary">your projects</span>
                </Link>
                <Link to="/about" className="btn btn-link text-secondary">
                  <span className="text-secondary">about us</span>
                </Link>

                <Link to="/help" className="btn btn-link text-secondary">
                  <span className="text-secondary">help</span>
                </Link>
                <Link
                  to="/login"
                  className="btn btn-link text-secondary"
                  onClick={this.logout}
                >
                  <span className="text-secondary">logout</span>
                </Link>
              </section>
            ) : (
              <section className="navbar-section">
                <Link to="/" className="btn btn-link text-secondary">
                  <span className="text-secondary">home</span>
                </Link>
                <Link to="/login" className="btn btn-link text-secondary">
                  <span className="text-secondary">login</span>
                </Link>
                <Link to="/signup" className="btn btn-link">
                  <span className="text-secondary">sign up</span>
                </Link>
              </section>
            )}
          </div>
          <div className="col-4 col-mr-auto">
            <div id="top-filler" />
            <h1 className="App-title">Time Budgetment</h1>
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;
