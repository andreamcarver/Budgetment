import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <container>
        <h1>Welcome to Time Budgetment</h1>
        <div className="aboutDescription">
          This is a simple web application perfect for freelancers, remote
          workers, or anyone who doesn't work a 9 to 5 job that would like to
          keep track of employment related expenses and earnings!
        </div>
        <div className="aboutHowItWorks">
          How it works is simple:
          <li>Sign In or Create and Account</li>
          <li>Create or Select A Project</li>
          <li>
            View, Create, and Update the tasks associated with the project
          </li>
          <li>Add Costs and Expenses for each task</li>
        </div>
      </container>
    );
  }
}

export default About;
