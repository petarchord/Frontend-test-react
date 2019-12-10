import React, { Component } from "react";
import Form from "../common/form";

class TestForm extends Form {
  state = {
    data: { from: 1, to: 20 },
    errors: { from: "", to: "" }
  };

  validate = () => {
    const errors = {};
    const { from, to } = this.state.data;
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

export default TestForm;
