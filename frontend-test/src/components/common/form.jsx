import React, { Component } from "react";
import Input from "./input";

class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.props.dispatchError(errors || {});
    if (errors) return;
    this.doSubmit();
  };

  handleChange = e => {
    const data = { ...this.props.data };
    data[e.currentTarget.name] = parseInt(e.currentTarget.value);
    this.props.updateData(data);
  };

  renderButton(label) {
    return (
      <button type="submit" className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(label, type, id, placeholder, name) {
    const data = this.props.data;
    const errors = this.props.errors;
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
