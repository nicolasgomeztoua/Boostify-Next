import React from "react";
import { Parallax } from "react-parallax";
import styles from "../Home/Home.module.css";
import styled from "styled-components";
const FAQ = styled(QuestionAnswer)`
  height: 40px;
  color: turquoise;
`;
const Faq = () => {
  return (
    <div>
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
    </div>
  );
};

export default Faq;
