import React from "react";
import styles from "./Home.module.css";
import { UserInjured } from "@styled-icons/fa-solid/UserInjured";
import { ChevronDoubleUp } from "@styled-icons/heroicons-solid/ChevronDoubleUp";
import { Badge } from "@styled-icons/open-iconic/Badge";
const WhatIsBoosting = () => {
  return (
    <div className={styles["WhatIsBoosting-container"]}>
      <h4 className={styles["WhatIsBoosting-title"]}>
        What <span style={{ color: "turquoise" }}>is</span> Apex legends
        Boosting?
      </h4>
      <ul id={styles["WhatIsBoosting-wrap"]}>
        <li className={styles["WIB-bullet-dot"]}>
          <UserInjured
            style={{ height: "50px", color: "#e43403", margin: "auto" }}
          ></UserInjured>

          <p style={{ textAlign: "center" }} className={styles["bullet-desc"]}>
            From playing the game solo with misinterpreted and often downright
            bad teamates, to tedious grinding for a sweet victory only to be
            scraped away by RNG hotdrops, the ranked grind can just make the
            game unenjoyable. That&apos;s where we come in.
          </p>
        </li>
        <li className={styles["WIB-bullet-dot"]}>
          <ChevronDoubleUp
            style={{ height: "50px", color: "#e43403", margin: "auto" }}
          ></ChevronDoubleUp>

          <p style={{ textAlign: "center" }} className={styles["bullet-desc"]}>
            Rank Boost will help you get out of the boring grind and back to
            competitiveness and fun. Simply select your current RP and your
            desired RP in our selection cards. Dont just boost your rp, but get
            a valuable lesson with it with our DuoQueue feature! Squad up with
            our professionals and learn from the best.
          </p>
        </li>
        <li className={styles["WIB-bullet-dot"]}>
          <Badge
            style={{ height: "50px", color: "#e43403", margin: "auto" }}
          ></Badge>

          <p style={{ textAlign: "center" }} className={styles["bullet-desc"]}>
            Don&apos;t depend on SBMM to give you a lucky game for your
            favourite badges. Pick and choose the way you highlight your best
            character&apos;s banner with Acheivement Boost. Just select and
            search from our vast variety of badges. For any special character
            badges, please drop us a support ticket in the contact page
          </p>
        </li>
      </ul>
    </div>
  );
};

export default WhatIsBoosting;
