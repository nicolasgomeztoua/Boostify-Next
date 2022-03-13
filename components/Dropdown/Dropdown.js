import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import ProdMenu from "../ProdMenu/ProdMenu";

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={
          click
            ? `${styles.dropdown_menu} ${styles.clicked}`
            : `${styles.dropdown_menu}`
        }
      >
        <ProdMenu />
      </ul>
    </>
  );
};

export default Dropdown;
