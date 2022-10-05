import featuredbooster from "../../public/assets/images/featured.png";
import Image from "next/image";
import styles from "./Home.module.css";
const featured = () => {
  return (
    <div className={styles["featured-container"]}>
      <h2
        className={`${styles["WhatIsBoosting-title"]} ${styles["featured-title"]}`}
        style={{
          padding: "10px",
          borderRadius: "20px",
          color: "white",
          borderColor: "white",
          marginBottom: "0px",
        }}
      >
        {" "}
        Featured Booster
      </h2>
      <div className={styles["featured-wrap"]}>
        <div id={styles["featuredbooster"]}>
          <img alt="featured booster" src={"/assets/images/featured.png"}></img>{" "}
        </div>
        <p className={styles["desc"]}>
          {" "}
          One of our Day 1 boosters. Top Tier Apex Legends veteran and OG. More
          than 5000 Hours of playtime with over 6000 total wins and 60k kills
          total. Apex Predator every season, every split. FPS experience for a
          decade. Trusted with Predator orders.
        </p>
      </div>
    </div>
  );
};

export default featured;
