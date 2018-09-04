import React, { Component } from "react";

class Home extends Component {
  render() {
    const imageStyle = {
      width: 400
    };
    return (
      <container>
        <div>
          <p className="rcorners1">Welcome to Time Budgetment!</p>
          <img
            alt="home"
            style={imageStyle}
            src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg"
          />
        </div>
        <div>
          To get started, go to the <i>Your Projects</i> tab. From there, you
          can add, edit, and delete both projects and tasks.
        </div>
      </container>
    );
  }
}
export default Home;
