import React, { useState, useEffect } from "react";
import Link from "next/link";

import styles from "./Home.module.css";
import styled from "styled-components";
import { Safe } from "@styled-icons/crypto/Safe";
import { GameController } from "@styled-icons/entypo/GameController";
import { Support } from "@styled-icons/boxicons-regular/Support";
import { VerifiedUser } from "@styled-icons/material-twotone/VerifiedUser";
import { QuestionAnswer } from "@styled-icons/material-twotone/QuestionAnswer";
import OrdersCarousel from "./OrdersCarousel";
import { Parallax } from "react-parallax";

import WhoAreWe from "./WhoAreWe";
import WhatIsBoosting from "./WhatIsBoosting";
import WhyUs from "./WhyUs";
import Featured from "./Featured";
import Head from "next/head";

import Stats from "./stats";
import Reviews from "../Reviews/Reviews";
const Verified = styled(VerifiedUser)`
  height: 50px;
`;
const Saftey = styled(Safe)`
  height: 100px;
`;
const Controller = styled(GameController)`
  height: 100px;
`;

const CSupport = styled(Support)`
  height: 100px;
`;
const FAQ = styled(QuestionAnswer)`
  height: 40px;
  color: turquoise;
`;
const Home = () => {
  const Horizon = "/assets/images/Horizon.webp";
  const HorizonMobile = "/assets/images/Horizon2.jpg";
  const [windowInnerWidth, setwindowInnerWidth] = useState(1279);
  const [horizonImg, sethorizonImg] = useState(Horizon);

  const reportWindowSize = () => {
    setwindowInnerWidth(window.innerWidth);
  };

  if (typeof window !== "undefined") {
    // detect window screen width function
    window.addEventListener("load", reportWindowSize);
    window.addEventListener("resize", reportWindowSize);
  }
  useEffect(() => {
    if (windowInnerWidth >= 1279) {
      sethorizonImg(Horizon);
    } else {
      sethorizonImg(HorizonMobile);
    }
  }, [windowInnerWidth]);

  /*   const Worldwide = styled(World)`
    height: 100px;
    color: turquoise;
  `; */

  return (
    <div>
      <Head>
        <title>
          Boostify | Season 11 Apex Legends Boosting Services
          Playstation/XBox/PC
        </title>
        <meta
          name="description"
          content="Get boosted by our professionals for a cheap price and achieve higher Ranks in Apex Legends. Our professionals consist of only All-seasons Apex predators. Veterans. 24/7 Live Chat Support. Cheap. Get boosted by the best. Same Day Deliver Ranked boost and Badge boost."
        />
        <meta name="theme-color" content="#008f68" />
      </Head>

      <Parallax
        strength={-200}
        bgImage={horizonImg}
        bgImageAlt="Horizon Header"
        bgImageStyle={{
          backgroundSize: "cover",
          backgroundAttachment: "none",
        }}
      >
        <div className={styles["Home-showcase"]}>
          <div className={styles["Home-container"]}>
            <h1 id={styles["Home-title"]}>Welcome to Boostify. </h1>
            <h2 id={styles["Home-subtitle"]}> Your hive for Apex boosting</h2>

            <div>
              <Link
                href={`/rank-boosting${
                  typeof window !== "undefined" ? window?.location.search : null
                }`}
                style={{ textDecoration: "none", color: "inherit" }}
                passHref
              >
                <button className={styles["btn1"]} id={styles["CTA"]}>
                  <span className={styles["btn1__inner"]} id={styles["CTA"]}>
                    <span
                      className={styles["btn1__slide"]}
                      id={styles["CTA"]}
                    ></span>
                    <span
                      className={styles["btn1__content"]}
                      id={styles["CTA"]}
                    >
                      Boost with us today
                    </span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>{" "}
      </Parallax>
      {/* ///////////////////////////////////// */}
      <Stats></Stats>
      <Featured></Featured>
      <div className={styles["Home-intro"]} id={styles["lookingToBoost"]}>
        <h2
          id={styles["Home-subtitle"]}
          style={{ color: "black", textShadow: "none" }}
        >
          {" "}
          Looking to boost your account to the next echelon?{" "}
        </h2>
        <div className={styles["icons"]}>
          <ul>
            <li className={styles["icon-section"]}>
              <span className={styles["desc"]}>
                We have a strong link with the predator community, so we are
                their preferred platform as known members of the ecosystem. We
                can ensure service from the best.
              </span>
              <div className={styles["title-icon"]}>
                <p>The Very Very Very Strongest</p>

                <span>
                  <Controller className={styles["icon"]} />
                </span>
              </div>
            </li>
          </ul>
          <ul>
            <li className={styles["icon-section"]}>
              <span className={styles["desc"]}>
                Customer support is here for you. if you have any inquiries or
                doubts about the process please feel free to leave us a message
                or an email through our Contact Us page.
              </span>
              <div className={styles["title-icon"]}>
                <p>Client support 24/7</p>

                <span>
                  <CSupport className={styles["icon"]} />
                </span>
              </div>
            </li>
          </ul>
          <ul>
            <li className={styles["icon-section"]}>
              <span className={styles["desc"]}>
                We take the security of our customers very seriously. Ensuring
                we precautiously perform the task for the quickest, most
                hassle-free experience we can deliver; Trust is our asset.{" "}
              </span>
              <div className={styles["title-icon"]}>
                <p>Security is our #1 concern</p>

                <span>
                  <Saftey className={styles["icon"]} />
                </span>
              </div>
            </li>
          </ul>
        </div>
        <h2 className={styles["Home-intro"]} id={styles["outro"]}>
          {" "}
          The preferred platform of the top 750 in the EU{" "}
          <Verified id={styles["verified"]} />{" "}
        </h2>
      </div>

      {/* ...................................................................*/}

      <Parallax
        strength={300}
        bgImage={"/assets/images/FAQ.png"}
        bgImageAlt="Frequently asked questions"
        bgImageStyle={{
          backgroundSize: "cover",
        }}
      >
        <div className={styles["FAQ-parallax"]}>
          <div className={styles["FAQ-container"]}>
            <div className={styles["FAQ"]}>
              <h3>
                <FAQ /> <br></br>How long will my order take to complete?
              </h3>
              <p>
                It really depends on the order. But speaking in general terms we
                start within an hour of purchase and complete orders within
                those same 24hours. Our support team will be able to accurately
                assess the ETA of your particular order.
              </p>
            </div>

            <div className={styles["FAQ"]}>
              <h3>
                <FAQ /> <br></br>Can i have the professional play with my
                favourite legend?
              </h3>
              <p>
                Yes, we offer legend choice in Acheivement Boost orders. Our
                professional boosters will carry out your order playing on your
                legend of choice.
              </p>
            </div>

            <div className={styles["FAQ"]}>
              <h3>
                <FAQ /> <br></br> Can the professional appear offline while he
                plays?
              </h3>
              <p>
                Yes, at no extra cost you can ask our professional players to
                appear offline on your account while he plays on your account.
                Ensuring your privacy during the process.
              </p>
            </div>
          </div>
        </div>
      </Parallax>

      <WhoAreWe></WhoAreWe>
      <WhatIsBoosting></WhatIsBoosting>
      <WhyUs></WhyUs>
      <OrdersCarousel></OrdersCarousel>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
