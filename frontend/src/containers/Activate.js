import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { verify } from "../actions/auth";

const Activate = ({ match, verify }) => {
  const [verified, setVerified] = useState(false);

  const verify_account = (e) => {
    const uid = match.params.uid;
    const token = match.params.token;
    verify(uid, token);
    setVerified(true);
  };

  if (verified) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ marginTop: "220px" }}
      >
        <h1>Verify Your Account</h1>
        <button
          className="btn btn-primary"
          onClick={verify_account}
          type="button"
          style={{ marginTop: "60px" }}
        >
          verify
        </button>
      </div>
    </div>
  );
};

export default connect(null, { verify })(Activate);
