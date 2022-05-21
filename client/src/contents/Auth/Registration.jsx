import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

const Signup = () => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });
  const { email, password, password_confirmation } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (password === password_confirmation) {
      signup(email, password, password_confirmation);
      setAccountCreated(true);
    }
    console.log(accountCreated);
  };
  const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
  const SIGNUP_FAIL = "SIGNUP_FAIL";
  const signup =
    (email, password, password_confirmation) => async (dispatch) => {
      const body = JSON.stringify({ email, password, password_confirmation });
      try {
        const res = await axios.post(
          "http://164.92.91.86/account/register/",
          body
        );
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: res.data,
        });
      } catch (err) {
        dispatch({
          type: SIGNUP_FAIL,
        });
      }
    };
  //   const history = useHistory();

  //   if (accountCreated) {
  //     history.push("/login");
  //   }

  return (
    <div className="container mt-5">
      <h1>Sign Up</h1>
      <p>Create your Account</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="Email*"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="Password*"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password*"
            name="password_confirmation"
            value={password_confirmation}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
      <p className="mt-3">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

export default Signup;
