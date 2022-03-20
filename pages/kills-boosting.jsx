import React from "react";
import KillBoost from "../components/KillsBoost/KillBoost";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProdMenu from "../components/ProdMenu/ProdMenu";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
const BadgeBoosting = () => {
  return (
    <>
      <Head>
        <title>Boostify | Apex Legends Kills Boosting</title>
        <meta
          name="description"
          content="Our top quality pub stompers will get you to any number of kills you desire in Apex Legends in a short time. You can choose any legend to boost kills for in apex legends: bloodhound, bangalore, lifeline, pathfinder, wraith, gibraltar, caustic, mirage, crypto, revenant, octane, wattson, horizon, valkyrie, rampart, loba. 1000 kills boost any legend in a short time."
        />
        <meta name="theme-color" content="#008f68" />
      </Head>
      <Navbar />
      <Hero videoUrl={"https://www.youtube.com/watch?v=4nwqSr3w8pQ"}></Hero>
      <ProdMenu></ProdMenu>
      <KillBoost />
      <Footer footerColor="#6d00ae" />
    </>
  );
};

export default BadgeBoosting;
