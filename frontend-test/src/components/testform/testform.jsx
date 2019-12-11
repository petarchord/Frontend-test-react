import React, { Component } from "react";
import Form from "../common/form";
import axios from "axios";
import { connect } from "react-redux";

class TestForm extends Form {
  validate = () => {
    const errors = {};
    const { from, to } = this.props.data;
    console.log("from", from);
    if (from < 0) {
      errors.from = `Invalid "from": ${from}`;
    }
    if (to < 0) {
      errors.to = `Invalid "to": ${to}`;
    }
    if (from > to) {
      errors.from = `"from" must not be larger then "to"`;
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  doSubmit = () => {
    axios({
      method: "get",
      url: "https://f-test-02.glitch.me/data",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log("response:", res);
        const { from, to } = this.props.data;
        const { data, token } = res.data;
        console.log("token", token);
        const resultObjects = [];
        console.log("res.data[0]", data[0]);
        for (let i = from; i <= to; i++) {
          resultObjects.push(data[i]);
        }
        console.log("resultObjects:", resultObjects);
        this.props.fetchData(resultObjects);
      })
      .catch(err => {
        console.log("error", err);
      });
    console.log("Submited");
  };

  render() {
    return (
      <div className="testform">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("From:", "number", "from", "From", "from")}
          {this.renderInput("To:", "number", "to", "To", "to")}
          {this.renderButton("Load")}
        </form>
      </div>
    );
  }
}

const mapStoreToProps = store => {
  console.log("store", store);
  return {
    data: store.dataReducer,
    errors: store.errorReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateData: data => dispatch({ type: "UPDATE_DATA", payload: data }),
    fetchData: data => dispatch({ type: "FETCH_DATA", payload: data }),
    dispatchError: error => dispatch({ type: "DISPATCH_ERROR", payload: error })
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(TestForm);
