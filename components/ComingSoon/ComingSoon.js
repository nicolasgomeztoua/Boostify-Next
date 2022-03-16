import React from "react";

import Timer from "./temporary/Countdown/Timer";

import styles from "./coming.module.css";

const ComingSoon = () => {
  return (
    <>
      <div className={styles["coming-soon-wrap"]}>
        <div className={styles["App"]}>
          <div className={styles["container"]}>
            <h1 className={styles["coming-soon-title"]}>
              Page
              <br />
              Coming Soon
            </h1>
            <Timer />
          </div>
        </div>
      </div>
    </>
  );
};
export default ComingSoon;
