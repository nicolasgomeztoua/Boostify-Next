import React, { useState } from "react";

import pred from "../../public/assets/images/1.png";
import cashback from "../../public/assets/images/cash-back.jpg";
import Gamer from "../../public/assets/images/gamer.jpg";
import { VpnLock } from "@styled-icons/material-twotone/VpnLock";
import Image from "next/image";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBolt,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";



const WhyUs = () => {
  const [our, setOur] = useState("checked");
  const [privacy, setPrivacy] = useState(false);
  const [delivery, setDeilvery] = useState(false);
  const [returns, setReturns] = useState(false);
  const ourClick = () => {
    setOur("checked");
    setPrivacy(false);
    setDeilvery(false);
    setReturns(false);
  };
  const privClick = () => {
    setOur(false);
    setPrivacy("checked");
    setDeilvery(false);
    setReturns(false);
  };
  const deliveryClick = () => {
    setOur(false);
    setPrivacy(false);
    setDeilvery("checked");
    setReturns(false);
  };
  const returnsClick = () => {
    setOur(false);
    setPrivacy(false);
    setDeilvery(false);
    setReturns("checked");
  };

  return (
    <>
      <h1 className={styles["whyUs-title"]} style={{ padding: "10px" }}>
        <span style={{ color: "turquoise" }}>Why?</span> Boostify
      </h1>
      <div className={styles["tabs"]}>
        <input
          type="radio"
          id="tab1"
          name="tab-control"
          onChange={ourClick}
          checked={our}
        />
        <input
          type="radio"
          id="tab2"
          name="tab-control"
          onChange={privClick}
          checked={privacy}
        />
        <input
          type="radio"
          id="tab3"
          name="tab-control"
          onChange={deliveryClick}
          checked={delivery}
        />
        <input
          type="radio"
          id="tab4"
          name="tab-control"
          onChange={returnsClick}
          checked={returns}
        />
        <ul>
          <li title="Our Boosters">
            <label htmlFor="tab1" role="button">
              <FontAwesomeIcon
                icon={faUsers}
                style={{ padding: "10px" }}
              />
              <br />
              <span>Our Boosters</span>
            </label>
          </li>
          <li title="Privacy">
            <label htmlFor="tab2" role="button">
              <FontAwesomeIcon
                icon={faUserSecret}
                style={{ padding: "10px" }}
              />
              <br />
              <span>Privacy</span>
            </label>
          </li>
          <li title="Delivery">
            <label htmlFor="tab3" role="button">
              <FontAwesomeIcon icon={faBolt} style={{ padding: "10px" }} />
              <br />
              <span>Delivery</span>
            </label>
          </li>
          <li title="Returns">
            <label htmlFor="tab4" role="button">
              <svg viewBox="0 0 24 24">
                <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
              </svg>
              <br />
              <span>Returns</span>
            </label>
          </li>
        </ul>

        <div className={styles["slider"]}>
          <div className={styles["indicator"]}></div>
        </div>
        <div className={styles["content"]}>
          <section className={styles["whyUs-element"]}>
            <h2>A true connection with our boosters</h2>
            <div className={styles["whyUs-grid"]}>
              <p>
                The CEO behind this project has been a predator from seasons
                2-8. Throughout he has devloped a strong relationship with other
                predators through their competitive spirit. What we wanted to
                achieve with Boostify is a direct connection between a customer
                and the best boosters on the market. With no leeches in between.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  height={300}
                  width={350}
                  src={pred}
                  alt="predator"
                ></Image>
              </div>
            </div>
          </section>
          <section className={styles["whyUs-element"]}>
            <h2>
              &quot;Safety first, dearies, and then, of course, utter
              mayhem.&quot;
            </h2>
            <div className={styles["whyUs-grid"]}>
              <p>
                All our Boosters are required to connect to our VPN server
                before starting the boosting process. We ensure privacy and
                security at all times from our professionals. Then inherently
                they can proceed to decimate their lobbies.
              </p>
              <VpnLock
                style={{
                  width: "300px",
                  color: "turquoise",
                  display: "flex",
                  justifySelf: "center",
                  alignSelf: "center",
                }}
              ></VpnLock>
            </div>
          </section>
          <section className={styles["whyUs-element"]}>
            <h2>Lightning fast</h2>
            <div className={styles["whyUs-grid"]}>
              <p>
                As soon as we get an order we notify all our boosters of an
                opening. Depending on availablity the maximum time before your
                order is started will be 24 hours. And we usually finish the
                order within those same 48h. We dont want players who love
                playing the game to stop for any more than they need to.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image src={Gamer} alt="booster" width={250} height={250} />
              </div>
            </div>
          </section>
          <section className={styles["whyUs-element"]}>
            <h2>Returns</h2>
            <div className={styles["whyUs-grid"]}>
              <p>
                We take user satisfaction as our utmost importance. Please feel
                free to contact us about any complaints or inquiries about your
                order. We are confident in our boosters and have a 30 day
                Money-Back guaranteed policy for any incompleted orders or
                negative experiences.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={cashback}
                  alt="cash back"
                  width={300}
                  height={300}
                ></Image>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
