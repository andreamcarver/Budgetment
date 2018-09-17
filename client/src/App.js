import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
// components
import Signup from "./components/sign-up";
import LoginForm from "./components/login-form";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import ChangeInput from "./components/changeInput";

class App extends Component {
  constructor() {
    super();
    this.state = { user: null };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  async componentDidMount() {
    // get the user and assign to state
    try {
      const response = await axios.get("/user/");
      console.log("Get user response: ", response.data);
      this.setState({ user: response.data.user });
    } catch (err) {
      console.log("something went wrong", err);
    }

  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  render() {
    console.log("the state = ", this.state);
    return (
      <div className="App">
        <Navbar updateUser={this.updateUser} user={this.state.user} />
        {/* greet user if logged in: */}
        {this.state.user && (
          <p>Currently logged in as {this.state.user.username}</p>
        )}
        {/* Routes to different components */}
        <Route exact path="/" component={Home} />
        <Route
          path="/login"
          render={() => <LoginForm updateUser={this.updateUser} />}
        />
        <Route path="/signup" component={Signup} />
        <Route path="/changeInputs" render={() => <ChangeInput />} />
        <Route path="/about" render={() => <About />} />

        <Route
          path="/projects"
          render={() => <Projects user={this.state.user} />}
        />
      </div>
    );
  }
}

export default App;
