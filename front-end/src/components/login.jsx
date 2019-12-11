import React, { Component } from "react";
import http from "../services/httpService";
import "../css/login.css";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    loggedIn: false,
    errors: []
  };

  onusernameChange = e => {
    let username = { ...this.state.username };
    username = e.currentTarget.value;
    this.setState({ username });
  };

  onPasswordChange = e => {
    let password = { ...this.state.password };
    password = e.currentTarget.value;
    this.setState({ password });
  };

  onSubmit = async e => {
    const { username, password } = this.state;
    e.preventDefault();
    if (!this.state.username || !this.state.password) {
      alert("Username and/or password required");
      return;
    }
    try {
      const { data: jwt } = await http.post("http://localhost:3900/api/auth", {
        username,
        password
      });
      localStorage.setItem("token", jwt);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <form className="form-signin" onSubmit={this.onSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputusername" className="sr-only">
          username address
        </label>
        <input
          type="username"
          id="inputusername"
          className="form-control"
          placeholder="username address"
          name="username"
          onChange={this.onusernameChange}
          autoFocus
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control mb-2"
          placeholder="Password"
          onChange={this.onPasswordChange}
          name="password"
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
    );
  }
}

export default LoginForm;
