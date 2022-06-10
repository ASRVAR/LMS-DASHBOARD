import React from "react";
import {Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-5 ">
          <div className="col-md-4"></div>
          <div
            className="col-md-4  shadow p-3 mb-5 rounded "
            style={{ backgroundColor: "#427874" }}
          >
            <h3
              className="text-center"
              style={{ color: "#fff", fontWeight: "bold" }}
            >
              LMS Login
            </h3>
            <div className="mb-3">
              <labe  className="form-label">
                Email address
              </labe>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-info mx-2">
              Login
            </button>
            <button type="submit" className="btn btn-info">
            <Link to="/Registration">Registration</Link>
            </button>
           
          </div>
         
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
