import React from "react";
import styles from "./Sucess.module.css";

import Link from "next/link";
import findGetParameter from "../../utils/getParameter";
import TagManager from "react-gtm-module";
import { Button } from "../ProductComponents/ProductElements";
import { useRouter } from "next/router";
const jwt = require("jsonwebtoken");

const Sucess = () => {
  const history = useRouter();

  if (typeof window !== "undefined") {
    const items = JSON.parse(localStorage.getItem("cart"));
    const paypal = findGetParameter("paypal");
    const token = findGetParameter("hash");
    const totalPrice = items.reduce(
      (total, b) => Number(total) + Number(b.price),
      0
    );
    const Names = items.reduce((titles, b) => titles + " " + b.title, "");

    if (paypal !== "null") {
      const tagManagerArgs = {
        dataLayer: {
          success: true,
          PurchaseAmount: totalPrice,
          event: "purchase",
          ecommerce: {
            currencyCode: "USD",
            value: totalPrice,
            tax: totalPrice * 0.02,
            shipping: 0,
            affiliation: Names,
            transaction_id: Math.random().toString(36).substr(2, 9),

            items: [items],
          },
        },
      };
      TagManager.dataLayer(tagManagerArgs);
    }
    console.log(paypal);

    if (token !== "null") {
      try {
        jwt.verify(token, "hashSecret");

        const tagManagerArgs = {
          dataLayer: {
            success: true,
            PurchaseAmount: totalPrice,
            event: "purchase",
            ecommerce: {
              currency: "USD",
              value: totalPrice,
              tax: totalPrice * 0.02,
              shipping: 0,
              affiliation: Names,
              transaction_id: Math.random().toString(36).substr(2, 9),

              items: [items],
            },
          },
        };
        TagManager.dataLayer(tagManagerArgs);
      } catch (err) {
        history.push("/" + window.location.search);
      }
    }
  }
  const clearCart = () => {
    localStorage.removeItem("cart");
  };
  return (
    <>
      <div className={styles["success-container"]}>
        <div className={styles["sucess-card"]}>
          <div
            style={{
              borderRadius: "200px",
              height: "200px",
              width: "200px",
              background: "#F8FAF5",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <i className={styles["checkmark"]}>✓</i>
          </div>
          <h1 className={styles["success-title"]}>Success</h1>
          <p className={styles["sucess-subtitle"]}>
            We received your purchase request;
            <br /> we&apos;ll be in touch shortly!
            <br />{" "}
            <Link href="/" passHref>
              <Button className={styles["example_d"]} onClick={clearCart}>
                {" "}
                Clear cart and go home
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sucess;
