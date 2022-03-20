import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import auth from "./AuthComponents.module.css";
import { useRouter } from "next/router";
import { signIn, useSession, signOut, getSession } from "next-auth/react";
import { LogInWithGoogle } from "../ProductComponents/ProductElements";
import DiscordButton from "../LoginWithDiscord/DiscordButton";
/* import {
  StepTwoWarningContainer,
  StepTwoWarning,
} from "../RankBoost/RankedBoostProductElements"; */
const Login = () => {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useRouter();

  // const [invalid, setInvalid] = useState("none");
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/Profile");
    } else {
      // setInvalid("flex");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://secret-cove-64633.herokuapp.com/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);
      history.push("/Profile");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
      <button onClick={() => signOut()}>HEELO</button>
      <div className={auth["login-screen"]}>
        <form onSubmit={loginHandler} className={auth["login-screen__form"]}>
          <h3 className={auth["login-screen__title"]}>Login</h3>
          {error && <span className={auth["error-message"]}>{error}</span>}
          <div className={auth["form-group"]}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              required
              id="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              tabIndex={1}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              tabIndex={2}
            />{" "}
            <Link href={"/Authentication/ForgotPassword"} passHref>
              <a className={auth["login-screen__forgotpassword"]}>
                {" "}
                <br />
                Forgot Password?
              </a>
            </Link>
          </div>
          <button
            type="submit"
            className={`${auth["form-btn"]} ${auth["form-btn-primary"]}`}
            id="login"
          >
            Login
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
              Login With Google
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
              text="Login With Discord"
              signIn={signIn}
              type="button"
            />
          </div>
          <span className={auth["login-screen__subtext"]}>
            Don&apos;t have an account?{" "}
            <Link
              href={`/Authentication/Register?${
                typeof window !== "undefined" ? window?.location.search : null
              }`}
            >
              Register
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;
