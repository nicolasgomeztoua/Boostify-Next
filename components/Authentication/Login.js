import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import auth from "./AuthComponents.module.css";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
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

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.back();
    } else {
      // setInvalid("flex");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "https://secret-cove-64633.herokuapp.com/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.back();
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
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
            <label htmlFor="password">
              Password:
              <Link
                href={"/Authentication/ForgotPassword"}
                className={auth["login-screen__forgotpassword"]}
              >
                Forgot Password?
              </Link>
            </label>
            <input
              type="password"
              required
              id="password"
              autoComplete="true"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              tabIndex={2}
            />
          </div>
          <button
            type="submit"
            className={`${auth["form-btn"]} ${auth["form-btn-primary"]}`}
            id="login"
          >
            Login
          </button>
          <button
            onClick={signIn}
            className={`${auth["form-btn"]} ${auth["form-btn-primary"]}`}
          >
            Login With google
          </button>

          <span className={auth["login-screen__subtext"]}>
            Don&apos;t have an account?{" "}
            <Link
              href={`Authentication/Register${
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
