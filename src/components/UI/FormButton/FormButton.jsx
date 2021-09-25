import React from 'react';

import './FormButton.styles.scss';

export default class FormButton extends React.Component {
  constructor(props) {
    super();

    this.state = {
      primary: props.primary ? 'primary' : '',
      className: props.className || '',
    };
  }

  render() {
    return (
      <button
        className={`btn-form-submit ${this.state.primary} ${this.state.className}`}
        type="submit"
      >
        {this.props.children}
      </button>
    );
  }
}
