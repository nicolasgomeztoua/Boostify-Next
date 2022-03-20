import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProdMenu from "../components/ProdMenu/ProdMenu";
import ArenasBoostingProduct from "../components/ArenasBoosting/ArenasBoostingProduct";

const ArenasBoosting = () => {
  return (
    <>
      <Navbar />
      <ProdMenu></ProdMenu>
      <ArenasBoostingProduct />
      <Footer footerColor="#f25a59" />
    </>
  );
};

export default ArenasBoosting;
