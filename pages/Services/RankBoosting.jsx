import React from "react";
import RankBoostProduct from "../../components/RankedBoost/RankBoostProduct";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const RankBoosting = () => {
  return (
    <>
      <Navbar />
      <RankBoostProduct />
      <Footer footerColor="#e43403"/>
    </>
  );
};

export default RankBoosting;
