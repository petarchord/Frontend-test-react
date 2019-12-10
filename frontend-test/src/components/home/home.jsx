import React, { Component } from "react";
import TestForm from "../testform/testform";
import Table from "../common/table";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <h1>Frontend test app</h1>
        <TestForm />
        <Table />
      </div>
    );
  }
}

export default Home;
