import React from "react";
import ComingSoon from "../components/ComingSoon/ComingSoon";
import Navbar from "../components/Navbar/Navbar";

import ProdMenu from "../components/ProdMenu/ProdMenu";
import Head from "next/head";

const RankBoosting = () => {
  return (
    <div>
      <Head>
        <title>Boostify | Apex Legends Rank Boosting</title>
        <meta
          name="description"
          content="Our top quality apex rank boost services will get you to any rank you desire in Apex Legends Ranked League including: Apex Predator, Apex Master and Apex Diamond. Break new grounds with our rank boost services"
        />
      </Head>
      <Navbar />

      <ComingSoon></ComingSoon>
    </div>
  );
};

export default RankBoosting;
