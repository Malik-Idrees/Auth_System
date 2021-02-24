import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { signup } from "../actions/auth";

const Signup = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { name, email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if(password === re_password){
    signup(name, email, password, re_password);
    setAccountCreated(true);
}
  };

  //Is the user is Authenticated
  //Redirect them to home page
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  if(accountCreated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container mt-5">
      <h1 className="m-1">Sign Up</h1>
      <p className="m-1">Create An Account</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            className="form-control m-1 "
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
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
        </div>
        <div className="form-group">
          <input
            className="form-control m-1 "
            type="password"
            placeholder="Confirm Password"
            name="re_password"
            value={re_password}
            onChange={(e) => onChange(e)}
            required
            minLength="6"
          />
        </div>
        <button className="btn btn-primary m-1" type="submit">
          Register
        </button>
      </form>
      <p className="mt-3 m-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { signup })(Signup);
