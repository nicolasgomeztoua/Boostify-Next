import Head from "next/head";
import React from "react";
import TermsOfServiceDoc from "../../components/Legal/TermsOfServiceDoc";
import Navbar from "../../components/Navbar/Navbar";

const PrivacyPolicy = () => {
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
      </Head>{" "}
      <Navbar></Navbar>
      <TermsOfServiceDoc></TermsOfServiceDoc>
    </>
  );
};

export default PrivacyPolicy;
