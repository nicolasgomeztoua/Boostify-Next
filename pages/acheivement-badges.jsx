import React from "react";
import AcheivementBoostProduct from "../components/AcheivementBoost/AcheivementBoostProduct";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProdMenu from "../components/ProdMenu/ProdMenu";
import Head from "next/head";
const BadgeBoosting = () => {
  return (
    <>
      <Head>
        <title>
          Boostify | Cheap Apex Legends Boosting Services Playstation
        </title>
        <meta
          name="description"
          content="Get boosted by our professionals for a cheap price and achieve higher Ranks in Apex Legends. Our professionals consist of only All-seasons Apex predators. Veterans. 24/7 Live Chat Support. Cheap. Get boosted by the best. Same Day Deliver Ranked boost and Badge boost."
        />
        <meta name="theme-color" content="#008f68" />
      </Head>
      <Navbar />
      <ProdMenu></ProdMenu>
      <AcheivementBoostProduct />
      <Footer footerColor="#e43403" />
    </>
  );
};

export default BadgeBoosting;
