import React from "react";

export const SelectField = ({
  name,
  label,
  options,
  value,
  placeholder,
  handleChange,
}) => {
  //populate the options that are passed in
  const selectOptions = options.map((option) => {
    return (
      <option key={option} value={option} label={option}>
        {option}
      </option>
    );
  });

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        className="form-select"
        name={name}
        value={value}
        onChange={handleChange}
      >
        {/* Default option */}
        <option value="" disabled>
          {placeholder}
        </option>
        {selectOptions}
      </select>
    </div>
  );
};
