import React, { Component } from "react";
import TestForm from "../testform/testform";
import Table from "../common/table";
import { connect } from "react-redux";

class Home extends Component {
  state = {};

  renderTable = () => {
    console.log("this.props.dataApi", this.props.dataApi);
    if (this.props.dataApi.length) return <Table rows={this.props.dataApi} />;
  };

  render() {
    return (
      <div className="home">
        <h1>Frontend test app</h1>
        <TestForm />
        {this.renderTable()}
      </div>
    );
  }
}

const mapStoreToProps = store => {
  return {
    dataApi: store.dataApiReducer
  };
};

export default connect(mapStoreToProps)(Home);
