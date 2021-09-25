import React from 'react';

import FormInput from '../UI/FormInput';
import FormButton from '../UI/FormButton';
import './Login.styles.scss';

export default class LogIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.email, this.state.password);
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.onSubmit}>
        <FormInput
          value={this.state.email}
          handleChange={this.handleEmailChange}
          id="email"
          label="Email"
          type="text"
        />
        <FormInput
          value={this.state.password}
          handleChange={this.handlePasswordChange}
          id="password"
          label="Password"
          type="password"
        />
        <FormButton primary className="submit-button">
          Log in
        </FormButton>
      </form>
    );
  }
}
