import React, {useState} from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {login} from '../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  //Is the user Authenticated
  //Redirect them to home page
  if(isAuthenticated){
    return <Redirect to='/' />
  }

  return (
    <div className="container mt-5">
      <h1>Sign In</h1>
      <p>Sign into your account</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            className="form-control m-1 "
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control m-1 "
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            required
            minLength="6"
          />
          <button className="btn btn-primary m-1" type="submit">
            Login
          </button>
        </div>
      </form>
      <p className="mt-3">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      <p className="mt-3">
        Forgot your password? <Link to="/reset-password">Reset password</Link>
      </p>
    </div>
  );
};

const mapStateToProps = state =>({
    isAuthenticated : state.auth.isAuthenticated
})
export default connect(mapStateToProps,{ login })(Login);
