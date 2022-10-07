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
import TrustBadge from "../TrustBadge/TrustBadge";
import WhoAreWe from "./WhoAreWe";
import WhatIsBoosting from "./WhatIsBoosting";
import WhyUs from "./WhyUs";
import Featured from "./Featured";
import Head from "next/head";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import FaqNew from "../FaqNew/FaqNew";
import Faq from "../Faq/Faq";
import NewHero from "../NewHero/NewHero";
import Stats from "../Stats";
import HomeIntro from "../HomeIntro";
import FaqTailwind from "../FaqTailwind";
import ReviewsNew from "../ReviewsNew";

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
          Boostify | Apex Legends Boosting Services Playstation/XBox/PC
        </title>
        <meta
          name="description"
          content="Get boosted by our professionals for a cheap price and achieve higher Ranks in Apex Legends. Our professionals consist of only All-seasons Apex predators. Veterans. 24/7 Live Chat Support. Cheap. Get boosted by the best. Same Day Deliver Ranked boost and Badge boost."
        />
        <meta name="theme-color" content="#008f68" />
      </Head>

      {/*       <Parallax
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
      </Parallax> */}

      {/* ///////////////////////////////////// */}
      <NewHero homeStyles={styles} />
      <Stats id="target" />

      <TrustBadge />
      <Banner />
      <Featured />

      <HomeIntro />

      {/* ...................................................................*/}
      <FaqNew />
      <FaqTailwind />
      <WhoAreWe />

      <WhyUs />
      <OrdersCarousel />
      <ReviewsNew />
    </div>
  );
};

export default Home;
