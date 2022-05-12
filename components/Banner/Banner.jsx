import React from "react";
import styles from "./banner.module.css";
import walzyEditThis from "../../utils/banner";
const Banner = () => {
  return (
    <div>
      <section className={styles["section"]}>
        <div>
          <section className={styles["news-message"]}>
            {walzyEditThis.map((word, index) => {
              return <p key={word}> {word}</p>;
            })}
            {walzyEditThis.map((word, index) => {
              return <p key={word}> {word}</p>;
            })}
            {walzyEditThis.map((word, index) => {
              return <p key={word}> {word}</p>;
            })}
          </section>
          <section className={styles["news-message"]}>
            {walzyEditThis.map((word, index) => {
              return <p key={word}> {word}</p>;
            })}
            {walzyEditThis.map((word, index) => {
              return <p key={word}> {word}</p>;
            })}
            {walzyEditThis.map((word, index) => {
              return <p key={word}> {word}</p>;
            })}
          </section>
        </div>
      </section>
    </div>
  );
};

export default Banner;
