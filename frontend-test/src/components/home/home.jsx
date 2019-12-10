import React, { Component } from "react";
import TestForm from "../testform/testform";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <h1>Frontend test app</h1>
        <TestForm />
      </div>
    );
  }
}

export default Home;
