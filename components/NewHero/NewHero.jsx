import React, { useEffect, useState } from "react";
import styles from "./NewHero.module.css";
import classLister from "../../utils/classLister";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "@styled-icons/evaicons-solid/ShoppingCart";
import { useCart } from "../../hooks/Cart/CartHandler";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const btns = [{ name: "btn1" }];

const NewHero = () => {
  const { data: session, status } = useSession();
  const [menuBtnActive, setMenuBtnActive] = useState(false);
  const cartItems = useCart();
  const [loggedIn, setLoggedIn] = useState(false);
  const [videos, setVideos] = useState(() => [
    { name: "video1", src: "assets/videos/v1.mp4", active: "active" },
  ]);
  const classes = classLister(styles);
  let history = useRouter();

  const handleBurgerMenu = () => {
    setMenuBtnActive(!menuBtnActive);
  };

  const handleVideoChange = (BtnIndex) => {
    setVideos((current) =>
      current.map((obj, index) => {
        if (obj.active === "active") {
          return { ...obj, active: "" };
        }

        return obj;
      })
    );
    setVideos((current) =>
      current.map((obj, index) => {
        if (index === BtnIndex) {
          return { ...obj, active: "active" };
        }

        return obj;
      })
    );
  };

  const logoutHandler = () => {
    signOut();
    localStorage.removeItem("authToken");

    history.push(
      "/Authentication/Login?" + typeof window !== "undefined"
        ? window?.location.search
        : null
    );
    setLoggedIn(false);
  };

  useEffect(() => {
    if (localStorage.getItem("authToken") || session?.user?.name) {
      setLoggedIn(true);
    } else if (!localStorage.getItem("authToken")) {
      setLoggedIn(false);
    }
  }, [session?.user?.name]);

  return (
    <>
      <header className={classes("header")}>
        <Link
          passHref
          href={`/${
            typeof window !== "undefined" ? window?.location.search : null
          }`}
        >
          <Image
            src={"/assets/images/logo.png"}
            alt="logo"
            width={60}
            height={60}
          />
        </Link>

        <div
          className={
            menuBtnActive
              ? classes("menu-btn", "menu-btn-active")
              : classes("menu-btn")
          }
          style={
            !menuBtnActive
              ? { background: `url("/assets/images/menu.png") no-repeat` }
              : { background: `url("/assets/images/close.png") no-repeat` }
          }
          onClick={handleBurgerMenu}
        ></div>
        <div
          className={
            menuBtnActive
              ? classes("navigation", "active")
              : classes("navigation")
          }
          onClick={handleBurgerMenu}
        >
          <div className={classes("navigation-items")}>
            <Link
              passHref
              href={`/Profile${
                typeof window !== "undefined" ? window?.location.search : null
              }`}
            >
              Profile
            </Link>
            <Link
              passHref
              href={`/Services${
                typeof window !== "undefined" ? window?.location.search : null
              }`}
            >
              Services
            </Link>

            {loggedIn ? (
              <a onClick={() => logoutHandler()}>Logout</a>
            ) : (
              <Link
                passHref
                href={`/Authentication/Login${
                  typeof window !== "undefined" ? window?.location.search : null
                }`}
              >
                Login
              </Link>
            )}
            <Link
              href={`/ContactUs${
                typeof window !== "undefined" ? window?.location.search : null
              }`}
            >
              Contact
            </Link>
            <Link
              href={`/Cart${
                typeof window !== "undefined" ? window?.location.search : null
              }`}
              passHref
            >
              <ShoppingCart className={styles.cart_icon}></ShoppingCart>
            </Link>
            <span className={styles.cart_icon_number}>{cartItems?.length}</span>
          </div>
        </div>
      </header>

      <section className={classes("home", "section")}>
        {videos.map((video, index) => {
          return (
            <video
              className={classes("video-slide", video.active)}
              src={video.src}
              autoPlay
              muted
              loop
              key={video.name}
            ></video>
          );
        })}
        <div
          className={classes("content", "active")}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1>Welcome to</h1>
          <h1 className={classes("Boostify")}>
            <span style={{ color: "turquoise" }}>Boostify</span>
          </h1>
          <p>Your #1 hive for Apex Legends Boosting services.</p>
          <a href="#target">Read More</a>
        </div>

        <div className={classes("slider-navigation")}>
          {btns.map((btn, index) => {
            return (
              <div
                className={classes("nav-btn", videos[index].active)}
                key={btn.name}
                onClick={() => handleVideoChange(index)}
              ></div>
            );
          })}
        </div>
      </section>
      <div id="target"></div>
    </>
  );
};

export default NewHero;
