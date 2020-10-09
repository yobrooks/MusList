import React from "react";

export const TextAreaField = ({
  name,
  label,
  value,
  handleChange,
  placeholder,
  rows,
  columns,
}) => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="form-input"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        columns={columns}
      ></textarea>
    </div>
  );
};
