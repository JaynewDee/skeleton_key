import React from "react";
import { Redirect } from "react-router-dom";
import Auth from "../utils/auth";

const Home = () => {
  return Auth.loggedIn() ? (
    <>
      <div className="container">
        <h1>HOME</h1>
      </div>
    </>
  ) : (
    <Redirect to="/login"></Redirect>
  );
};

export default Home;
