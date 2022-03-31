import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

import { useCookies } from "react-cookie";

import { signOut } from "next-auth/react";

const SpecialOauth = async (username, email, password, image) => {
  const [error, setError] = useState("");
  const history = useRouter();
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
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

  try {
    const { data } = await axios.post(
      "https://secret-cove-64633.herokuapp.com/api/auth/register",
      { username, email, password, image, special, dateCreated },
      config
    );

    localStorage.setItem("authToken", data.token);
    handleCookie();
    if (typeof window !== "undefined") {
      history.push("/thank_you" + window.location.search);
    }
    return;
  } catch (err) {
    setError(
      err.response.data.error === "Duplicate Field Value Enter"
        ? "Account already registered"
        : err.response.data.error
    );
  }

  if (error === "Account already registered") {
    try {
      const { data } = await axios.post(
        "https://secret-cove-64633.herokuapp.com/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);
      handleCookie();
      if (typeof window !== "undefined") {
        history.push("/thank_you" + window.location.search);
      }
    } catch (err) {
      signOut();

      history.push("/?BoostifyAccountAlready=true");
    }
  }
};
export default SpecialOauth;
