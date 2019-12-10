import React from "react";

const Input = ({
  label,
  type,
  id,
  placeholder,
  name,
  value,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        onChange={onChange}
        type={type}
        className="form-control"
        id={id}
        value={value}
        placeholder={placeholder}
        name={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
