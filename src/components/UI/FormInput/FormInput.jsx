import React from 'react';

import './FormInput.styles.scss';

function FormInput({
  value,
  handleChange,
  label,
  placeholder,
  className = '',
  id,
  ...props
}) {
  return (
    <div className="form-input-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        value={value}
        onChange={handleChange}
        className={`input ${className}`}
        id={id}
        placeholder={placeholder || label}
        type="text"
        {...props}
      />
    </div>
  );
}

export default FormInput;
