import React, { Component } from "react";
import Form from "../common/form";
import axios from "axios";
import { connect } from "react-redux";

class TestForm extends Form {
  validate = () => {
    const errors = {};
    const { from, to } = this.props.data;
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
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then(res => {
        console.log("response:", res);
        const { from, to } = this.props.data;
        const { data, token } = res.data;
        localStorage.setItem("token", token);
        const resultObjects = [];
        let matchedIndexes = this.findMatchedIndexes(
          from,
          to,
          data.slice(from - 1, to + 1)
        );

        if (matchedIndexes) {
          let resultIndex;
          for (let i = 0; i < matchedIndexes.length; i++) {
            resultIndex = data[matchedIndexes[i]].index - 1;
            resultObjects[resultIndex] = data[matchedIndexes[i]];
          }

          for (let i = 0; i < to; i++) {
            if (!resultObjects[i]) {
              resultObjects[i] = {
                index: i + 1,
                slot: null,
                city: null,
                velocity: null
              };
            }
          }
        } else {
          for (let i = from; i <= to; i++) {
            resultObjects[i] = {
              index: i,
              slot: null,
              city: null,
              velocity: null
            };
          }
        }

        this.props.fetchData(resultObjects);
      })
      .catch(err => {
        console.log("error", err);
      });
    console.log("Submited");
  };

  findMatchedIndexes = (from, to, array) => {
    let matchedIndexes = [];
    for (let i = 0; i <= to; i++) {
      for (let j = from; j <= to; j++) {
        if (array[i].index === j) {
          matchedIndexes.push(i);
        }
      }
    }

    return matchedIndexes.length ? matchedIndexes : null;
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
