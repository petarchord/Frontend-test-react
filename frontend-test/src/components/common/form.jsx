import React, { Component } from "react";
import Input from "./input";

class Form extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    console.log("errors:", errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = e => {
    console.log("e", e.currentTarget.name);
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  };

  renderButton(label) {
    return (
      <button type="submit" className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(label, type, id, placeholder, name) {
    const { data, errors } = this.state;
    return (
      <Input
        label={label}
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
