import React from "react";
import {Link} from 'react-router-dom';

const Home = () => (
  <div className="container">
    <div className="jumbotron mt-5">
      <h1 className="display-4">Welcome to Auth System!</h1>
      <p className="lead">Authentication System Built with Django and Djoser</p>
      <hr className="my-4" />
      <p>Click The LogIn Button</p>
      <p className="lead">
        <Link className="btn btn-primary btn-lg" to="/login" role="button">
          Login
        </Link>
      </p>
    </div>
  </div>
);

export default Home;
