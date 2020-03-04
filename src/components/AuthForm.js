import logo200Image from 'assets/img/logo/logo_200.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import soap from 'tinysoap';
import qs from 'querystring'
import $ from 'jquery';
import { Session } from 'bc-react-session';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

class AuthForm extends React.Component {
  state = {
    redirectToReferrer: false,
    toHome: false,
  }

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
      response: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
    this.dismissResponse = this.dismissResponse.bind(this);

  }


  dismissError() {
    this.setState({ error: '' });
  }

  dismissResponse() {
    this.setState({ response: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      console.log('password not present ')
      return this.setState({ error: 'Password is required' });
    }


    const url = "http://localhost:8081/app.fmfb-v1/ADAndCBSAuthentication";
    const urlBranchDetails = "http://localhost:8081/CIM/getBranchCode?employeeName=";
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const payload = {
      user_name: this.state.username,
      password: this.state.password

    };

    fetch(url, {
      method: 'POST',
      body: qs.stringify(payload),
      headers: headers

    })
      .then(res => res.json())
      .then(response => {
        console.log('Success:', response)
        var resultJSON = JSON.stringify(response);
        var JSONObject = JSON.parse(resultJSON);
        console.log(JSON.parse(resultJSON));
        if (JSONObject.response_code === '00') {

          fetch(urlBranchDetails + JSONObject.user_id)
            .then(res => res.json())
            .then(response => {
              console.log('Success:', response)
              var resultJSONBranch = JSON.stringify(response);
              var JSONObjectBranch = JSON.parse(resultJSONBranch);
              console.log(JSON.parse(resultJSON));
              Session.start({
                payload: {
                  username: JSONObject.user_id,
                  branchName: JSONObjectBranch.branchName,
                  branchCode: JSONObjectBranch.branchCode
                },
                expiration: 86400000 // (optional) defaults to 1 day
              })
              console.log('login successfull');
              this.setState(() => ({
                toHome: true,
              }))
            });
        } else {
          return this.setState({ response: JSONObject.response_description });

        }
      })
      .catch(error => console.error('Error:', error));

    return this.setState({ error: '' });


  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }


  get isLogin() {
    return this.props.authState === STATE_LOGIN;
  }

  get isSignup() {
    return this.props.authState === STATE_SIGNUP;
  }

  changeAuthState = authState => event => {
    event.preventDefault();

    this.props.onChangeAuthState(authState);
  };

  // handleSubmit = event => {
  //   event.preventDefault();


  //   console.log("handleSubmit called")
  //   console.log(this.props.usernameInputProps + "usernameProps", this.props.passwordInputProps + "passwordProps");
  //   const url = "http://localhost:8081/app.fmfb-v1/ADAndCBSAuthentication";
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   const payload = {
  //     user_name: "mohsin-4088",
  //     password: "fmfb@2018"

  //   };
  //   fetch(url, {
  //     method: 'POST',
  //     body: qs.stringify(payload),
  //     headers: headers

  //   }).then(res => res.json())
  //     .then(response => console.log('Success:', JSON.stringify(response)))
  //     .catch(error => console.error('Error:', error));
  // };

  renderButtonText() {
    const { buttonText } = this.props;

    if (!buttonText && this.isLogin) {
      return 'Login';
    }

    if (!buttonText && this.isSignup) {
      return 'Signup';
    }

    return buttonText;
  }

  render() {


    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }
    const {
      showLogo,
      usernameLabel,
      usernameInputProps,
      passwordLabel,
      passwordInputProps,
      confirmPasswordLabel,
      confirmPasswordInputProps,
      children,
      onLogoClick,
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        {showLogo && (
          <div className="text-center pb-4">
            <img
              src={logo200Image}
              className="rounded"
              style={{ width: 60, height: 60, cursor: 'pointer' }}
              alt="logo"
              onClick={onLogoClick}
            />
          </div>
        )}
        <div>{
          this.state.error &&
          <h3 data-test="error" onClick={this.dismissError}>
            <button onClick={this.dismissError}>✖</button>
            {this.state.error}
          </h3>
        }
        </div>
        <FormGroup>
          <Label for={usernameLabel}>{usernameLabel}</Label>
          <Input
            value={this.state.username}
            onChange={this.handleUserChange}
            {...usernameInputProps} />
        </FormGroup>
        <FormGroup>
          <Label for={passwordLabel}>{passwordLabel}</Label>
          <Input
            value={this.state.password}
            onChange={this.handlePassChange}
            {...passwordInputProps}
          />
        </FormGroup>
        {this.isSignup && (
          <FormGroup>
            <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
            <Input {...confirmPasswordInputProps} />
          </FormGroup>
        )}
        <FormGroup check>
          <Label check>
          </Label>
        </FormGroup>
        <hr />
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={this.handleSubmit}>
          {this.renderButtonText()}
        </Button>


        <div>{
          this.state.response &&
          <h3 data-test="error" onClick={this.dismissResponse}>
            <button onClick={this.dismissResponse}>✖</button>
            {this.state.response}
          </h3>
        }
        </div>

        {children}
      </Form>
    );
  }
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  isAuthenticated: PropTypes.bool,
  showLogo: PropTypes.bool,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
  onLogoClick: PropTypes.func,
};

AuthForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,
  usernameLabel: 'Username',
  isAuthenticated: false,
  usernameInputProps: {
    type: 'text',
    placeholder: 'username',
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',
    placeholder: 'your password',
  },
  confirmPasswordLabel: 'Confirm Password',
  confirmPasswordInputProps: {
    type: 'password',
    placeholder: 'confirm your password',
  },
  onLogoClick: () => { },
};

export default AuthForm;
