import React, { useState, useEffect } from "react";

import Link from "next/link";
import styles from "./Navbar.module.css";
import Dropdown from "../Dropdown/Dropdown";
import { useRouter } from "next/router";
import Image from "next/image";
import { ShoppingCart } from "@styled-icons/evaicons-solid/ShoppingCart";
import { useCart } from "../../hooks/Cart/CartHandler";
import logo from "../../public/assets/images/logo.png";
import { LogOut } from "@styled-icons/boxicons-regular/LogOut";
import { Bars } from "@styled-icons/fa-solid/Bars";
import { Cross } from "@styled-icons/icomoon/Cross";
import styled, { css } from "styled-components";
import { signOut, useSession } from "next-auth/react";
const NavMenu = css`
  color: white;
  height: 30px;
`;
const CrossMenu = styled(Cross)`
  ${NavMenu}
`;
const BurgerMenu = styled(Bars)`
  ${NavMenu}
`;
const Button = styled.button`
  padding: 8px 20px;
  border-radius: 4px;
  outline: none;
  border: none;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  background-color: #e43403;
  &:hover {
    padding: 6px 12px;
    transition: all 0.3s ease-out;
    background-color: #e43403;
    color: #fff;
    border-radius: 4px;
    border: 2px solid #e43403;
  }
`;
const NextLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  width: min-content;
  &:hover {
    background-color: #1888ff;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }
`;
const Navbar = () => {
  let history = useRouter();
  const cartItems = useCart();
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [displayCheckBox, setDisplayCheckBox] = useState("none");
  const [displayButton, setDisplayButton] = useState("flex");
  const { data: session, status } = useSession();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    if (localStorage.getItem("authToken") || session?.user?.name) {
      setLoggedIn(true);
    } else if (!localStorage.getItem("authToken")) {
      setLoggedIn(false);
    }
  }, [session?.user?.name]);

  const onMouseEnter = () => {
    if (window?.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window?.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    signOut();
    history.push(
      "/Authentication/Login?" + typeof window !== "undefined"
        ? window?.location.search
        : null
    );
    setLoggedIn(false);
  };

  useEffect(() => {
    if (loggedIn === true) {
      setDisplayCheckBox("flex");
      setDisplayButton("none");
    }
    if (loggedIn === false) {
      setDisplayCheckBox("none");
      setDisplayButton("flex");
    }
  }, [loggedIn]);

  return (
    <>
      <nav className={styles.navbar}>
        <Link
          passHref
          href={`/${
            typeof window !== "undefined" ? window?.location.search : null
          }`}
          onClick={closeMobileMenu}
        >
          <div className={styles.navbar_logo}>
            <Image src={logo} alt="logo" width={60} height={60} /> Boostify
          </div>
        </Link>

        <div className={styles.menu_icon} onClick={handleClick}>
          {click === false && <BurgerMenu></BurgerMenu>}
          {click === true && <CrossMenu></CrossMenu>}
        </div>
        <ul
          className={
            click ? `${styles.nav_menu} ${styles.active}` : styles.nav_menu
          }
        >
          <li className={styles.nav_item}>
            <Link
              passHref
              href={`/${
                typeof window !== "undefined" ? window?.location.search : null
              }`}
              onClick={closeMobileMenu}
            >
              <NextLink className={styles.nav_links}>Home</NextLink>
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link
              passHref
              href={`/Profile${
                typeof window !== "undefined" ? window?.location.search : null
              }`}
              onClick={closeMobileMenu}
            >
              <NextLink className={styles.nav_links}>Profile</NextLink>
            </Link>{" "}
          </li>
          <li
            className={styles.nav_item}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              passHref
              href={"/Services/RankBoosting"}
              className={styles.nav_links}
              onClick={closeMobileMenu}
            >
              <NextLink>
                {" "}
                Services{" "}
                <i className={`${styles.fas}${styles.fa_caret_down}`} />
              </NextLink>
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className={styles.nav_item}>
            <Link passHref href={"/contact_us"} onClick={closeMobileMenu}>
              <NextLink style={{ width: "120px" }} className={styles.nav_links}>
                Contact Us
              </NextLink>
            </Link>{" "}
          </li>

          <li
            onClick={logoutHandler}
            className={styles.nav_item}
            style={{
              display: displayCheckBox,
              flexDirection: "column",
              justifyContent: "flex_center",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <NextLink>
              <p
                style={{ width: "90px", marginBottom: "0" }}
                className={`${styles.nav_links}${styles.logout}`}
              >
                Logout <LogOut style={{ height: "27px" }}></LogOut>
              </p>{" "}
            </NextLink>
          </li>
          <Link
            passHref
            href={`/Authentication/Login${
              typeof window !== "undefined" ? window?.location.search : null
            }`}
            style={{ textDecoration: "none" }}
          >
            <div className={styles.nav_item} style={{ display: displayButton }}>
              <Button className={styles.nav_links}>Log In</Button>
            </div>
          </Link>
          <li className={styles.nav_item}>
            <Link
              passHref
              href={`/Cart${
                typeof window !== "undefined" ? window?.location.search : null
              }`}
              style={{ textDecoration: "none" }}
            >
              <a>
                {" "}
                <ShoppingCart className={styles.cart_icon}></ShoppingCart>{" "}
                <span className={styles.cart_icon_number}>
                  {cartItems?.length}
                </span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
