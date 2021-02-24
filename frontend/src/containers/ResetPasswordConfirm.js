import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { reset_password_confirm } from "../actions/auth";

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const uid = match.params.uid;
    const token = match.params.token;
    //Checks to see if new_password and re_new_password matches! Otherwise send reset_password_confirm()
    reset_password_confirm(uid, token, new_password, re_new_password);
    setRequestSent(true);
  };

  //Is the password is Resetted
  //Redirect them to home page
  if (requestSent) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container mt-5">
      <h1>Reset Your Password!</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            className="form-control m-1 "
            type="password"
            placeholder="New Password"
            name="new_password"
            value={new_password}
            onChange={(e) => onChange(e)}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control m-1 "
            type="password"
            placeholder="Confirm New Password"
            name="re_new_password"
            value={re_new_password}
            onChange={(e) => onChange(e)}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary m-1" type="submit">
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
