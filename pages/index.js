import Head from "next/head";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import findGetParameter from "../utils/getParameter";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import TagManager from "react-gtm-module/dist/TagManager";

export default function Index() {
  const failure = () => {
    toast.error(
      "Sorry! you already have a boostify account with that email/username, Please login using the form.",
      {
        position: "top-right",
        autoClose: 20000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-NXPK262",
    };
    TagManager.initialize(tagManagerArgs);
    const alreadySignedUpParam = findGetParameter("BoostifyAccountAlready");
    if (alreadySignedUpParam === "true") {
      failure();
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          Boostify | Apex Legends Boosting Services
          Playstation/XBox/PC
        </title>
        <meta
          name="description"
          content="Get boosted by our professionals for a cheap price and achieve higher Ranks in Apex Legends. Our professionals consist of only All-seasons Apex predators. Veterans. 24/7 Live Chat Support. Cheap. Get boosted by the best. Same Day Deliver Ranked boost and Badge boost."
        />
        <meta name="theme-color" content="#008f68" />
      </Head>
      <Navbar />
      <Home />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer style={{ paddingTop: "100vh" }} footerColor="turquoise"></Footer>
    </>
  );
}
