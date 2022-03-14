import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import auth from "./AuthComponents.module.css";
import { useRouter } from "next/router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const history = useRouter();
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/Authentication/login" + window.location.search);
    }
  }, [history]);

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "https://secret-cove-64633.herokuapp.com/api/auth/register",
        { username, email, password },
        config
      );
      localStorage.setItem("authToken", data.token);
      history.push("/Authentication/login" + window.location.search);
    } catch (err) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
      <div className={auth["register-screen"]}>
        <form
          onSubmit={registerHandler}
          className={auth["register-screen__form"]}
        >
          <h3 className={auth["register-screen__title"]}>Register</h3>
          {error && <span className={auth["error-message"]}>{error}</span>}
          <div className={auth["form-group"]}>
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              required
              id="name"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={auth["form-group"]}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              required
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={auth["form-group"]}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              required
              id="password"
              autoComplete="true"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={auth["form-group"]}>
            <label htmlFor="confirmpassword">Confirm Password:</label>
            <input
              type="password"
              required
              id="confirmpassword"
              autoComplete="true"
              placeholder="Confirm password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className={`${auth["form-btn"]} ${auth["form-btn-primary"]}`}
          >
            Register
          </button>

          <span className={auth["register-screen__subtext"]}>
            Already have an account?{" "}
            <Link to={"/Authentication/login" + window.location.search}>
              Login
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Register;
