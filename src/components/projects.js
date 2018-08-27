import React, { Component } from "react";
import axios from "axios";

class Project extends Component {
  constructor() {
    super();
    this.state = {
      project: ""
    };
  }
  //   constructor() {
  //     super();
  //     this.state = {
  //       project: ""
  //     };
  //   }
  render() {
    return (
      <container>
        <h1>Your Projects</h1>
        <button>Add New Project</button>
        <div className="projectCard">
          <h3>Babysitting</h3>
          <div>
            <h4>Watching the kids for Bob and Julie</h4>
          </div>
          <div>
            <button>Add Task</button>
          </div>
        </div>
        <div className="projectCard">
          <h3>Freelance</h3>
          <div>
            <h4>Freelance Web Dev for Drupal</h4>
          </div>
          <div>
            <button>Add Task</button>
            <button id="myBtn">Open Modal</button>

            <div id="myModal" class="modal">
              <div class="modal-content">
                <span class="close">&times;</span>
                <p>Some text in the Modal..</p>
              </div>
            </div>
          </div>
        </div>
      </container>
    );
  }
}

export default Project;
