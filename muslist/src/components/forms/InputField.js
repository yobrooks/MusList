import React from "react";

//pass in another prop for error handling and default value if being edited (default prop for this will be empty string)

/*
name -->
label-->
type-->
value-->
handleChange-->
placeholder-->
children-->
*/
export const InputField = ({
  name,
  label,
  type,
  value,
  handleChange,
  placeholder,
}) => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="form-input"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

//define proptypes
