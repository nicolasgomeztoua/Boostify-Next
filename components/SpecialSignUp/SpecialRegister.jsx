import React, { useState } from "react";
import axios from "axios";
import auth from "../Authentication/AuthComponents.module.css";
import "./CSS/Redirect.module.css";
import { useCookies } from "react-cookie";
import TagManager from "react-gtm-module";
import { LogInWithGoogle } from "../ProductComponents/ProductElements";
import DiscordButton from "../LoginWithDiscord/DiscordButton";
import { signIn } from "next-auth/react";

const SpecialRegister = ({ history, display }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const setCookie = useCookies(["user"]);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const special = true;
  function handleCookie() {
    setCookie[1]("Special", "true", {
      path: "/",
      maxAge: (86400000 * 2) / 1000,
    });
  }
  let dateFormated = new Date().getTime() + 86400000 * 2;
  let dateCreated = new Date(dateFormated).toLocaleDateString("en-UK", options);

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const tagManagerArgs = {
      dataLayer: {
        registered: true,
        UserId: email,
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
      const { data } = await axios
        .post(
          "https://secret-cove-64633.herokuapp.com/api/auth/register",
          { username, email, password, special, dateCreated },
          config
        )
      TagManager.dataLayer(tagManagerArgs);
      localStorage.setItem("authToken", data.token);
      handleCookie();
      history.push("/thank_you" + window.location.search);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className={auth["register-screen"]} style={{ display: display }}>
      <form
        onSubmit={registerHandler}
        className={`${auth["register-screen__form"]}  ${auth["animation"]}`}
        id="specialSignUpForm"
      >
        <h3
          className={`${auth["register-screen__title"]} ${auth["text-shadow-black"]}`}
          style={{ color: "black" }}
        >
          Register Today <br /> For A Free 4k/20 Bomb With Your Next Rank Boost
          Order
        </h3>
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
                  <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0px",
            }}
          >
            <LogInWithGoogle
              onClick={() => {
                signIn("google");
              }}
              type="button"
              url="url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=)"
            >
              Sign Up With Google
            </LogInWithGoogle>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0px",
            }}
          >
            <DiscordButton
              text="Sign Up With Discord"
              signIn={signIn}
              type="button"
            />
          </div>
      </form>
    </div>
  );
};

export default SpecialRegister;
