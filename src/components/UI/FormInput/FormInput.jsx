import React from 'react';

import './FormInput.styles.scss';

export default class FormInput extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
    };
  }

  render() {
    const {
      value,
      label,
      id,
      className = '',
      handleChange,
      placeholder,
      ...props
    } = this.props;

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
}

// function FormInput({
//   handleChange,
//   label,
//   placeholder,
//   className = '',
//   id,
//   ...props
// }) {
//   return (
//     <div className="form-input-group">
//       {label && <label htmlFor={id}>{label}</label>}
//       <input
//         className={`input ${className}`}
//         id={id}
//         placeholder={placeholder || label}
//         type="text"
//       />
//     </div>
//   );
// }
