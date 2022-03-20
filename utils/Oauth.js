import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
const Oauth = async (username, email, password, image) => {
  const [error, setError] = useState("");
  const history = useRouter();
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.post(
      "https://secret-cove-64633.herokuapp.com/api/auth/register",
      { username, email, password, image },
      config
    );
    localStorage.setItem("authToken", data.token);
    history.push("/Profile");
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
      history.push("/Profile");
    } catch (err) {
      signOut();

      history.push("/?BoostifyAccountAlready=true");
    }
  }
};
export default Oauth;
