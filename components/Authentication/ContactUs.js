import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/Link";
import styles from "../Authentication/AuthComponents.module.css";
import { useRouter } from "next/router";
import {
  StepTwoWarningContainer,
  StepTwoWarning,
  Button,
} from "../ProductComponents/ProductElements";
const Contact = () => {
  const history = useRouter();
  const [email, setEmail] = useState("");

  const [supportTicket, setSupportTicket] = useState("");
  const [invalid, setInvalid] = useState("none");
  const [valid, setValid] = useState("none");
  const checkoutHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        "https://secret-cove-64633.herokuapp.com/api/auth/supportTickets",
        { email, supportTicket },
        config
      );
      setValid("flex");
      setTimeout(() => {
        history.push("/" + window.location.search);
      }, 3000);
    } catch (error) {}
  };
  useEffect(() => {
    if (email.length <= 0 || supportTicket.length <= 0) {
      setInvalid("flex");
    } else {
      setInvalid("none");
    }
  }, [email.length, supportTicket.length]);
  return (
    <>
      {" "}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <StepTwoWarningContainer
          style={{ display: invalid, alignSelf: "flex-start" }}
        >
          Please fill out all parts of the form
          <StepTwoWarning>
            <i
              className={styles["fa fa-times"]}
              onClick={() => setInvalid("none")}
              style={{ padding: "20px" }}
            ></i>
          </StepTwoWarning>
        </StepTwoWarningContainer>
      </div>
      <StepTwoWarningContainer
        style={{
          display: valid,
          alignSelf: "flex-start",
          backgroundColor: "green",
        }}
      >
        We have received your message. We&apos;ll answer shortly
        <StepTwoWarning>
          <i
            className={styles["fa fa-times"]}
            onClick={() => setInvalid("none")}
            style={{ padding: "20px" }}
          ></i>
        </StepTwoWarning>
      </StepTwoWarningContainer>
      <div className={styles["login-screen"]}>
        <form
          onSubmit={checkoutHandler}
          className={styles["login-screen__form"]}
        >
          <h3 className={styles["login-screen__title"]}>Support Ticket</h3>

          <div className={styles["form-group"]}>
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
          <div className={styles["form-group"]}>
            <label htmlFor="text">Your question:</label>
            <textarea
              type="text"
              required
              id="ticket"
              placeholder="Ask us something"
              onChange={(e) => setSupportTicket(e.target.value)}
              value={supportTicket}
              tabIndex={1}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              className={styles["form-btn form-btn-primary"]}
              disabled={() => {
                if (setInvalid === "flex") {
                  return true;
                }
              }}
            >
              Submit Ticket
            </Button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className={styles["login-screen__subtext"]}>
              Don&apos;t have an account?{" "}
              <Link
                href={`/Authentication/Register${
                  typeof window !== "undefined" ? window?.location.search : null
                }`}
              >
                Register
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
