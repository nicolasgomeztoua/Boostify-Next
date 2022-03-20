import React from "react";
import RankBoostProduct from "../components/RankedBoost/RankBoostProduct";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProdMenu from "../components/ProdMenu/ProdMenu";
import Head from "next/head";

const RankBoosting = () => {
  return (
    <>
      <Head>
        <title>Boostify | Apex Legends Rank Boosting</title>
        <meta
          name="description"
          content="Our top quality apex rank boost services will get you to any rank you desire in Apex Legends Ranked League including: Apex Predator, Apex Master and Apex Diamond. Break new grounds with our rank boost services"
        />
      </Head>
      <Navbar />
      <ProdMenu></ProdMenu>
      <RankBoostProduct />
      <Footer footerColor="#e43403" />
    </>
  );
};

export default RankBoosting;
