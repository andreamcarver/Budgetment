import React, { Component } from "react";
import ReactDOM from "react-dom";

class ChangeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };

    this.changeText = this.changeText.bind(this);
    this.handleNewThing = this.handleNewThing.bind(this);
  }

  changeText(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleNewThing(event) {
    console.log("Beef is delicious");
  }

  render() {
    return (
      <container>
        <div>
          <label htmlFor="name">Enter New Task Name</label>
          <input type="text" id="name" onChange={this.changeText} />
          <h3>{this.state.name}</h3>
          <input type="submit" onClick={this.handleNewThing} />
        </div>
      </container>
    );
  }
}

export default ChangeInput;
