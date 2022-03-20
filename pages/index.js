import Head from "next/head";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import findGetParameter from "../utils/getParameter";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
export default function Home() {
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
    const alreadySignedUpParam = findGetParameter("BoostifyAccountAlready");
    if (alreadySignedUpParam === "true") {
      failure();
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          Boostify | Season 11 Apex Legends Boosting Services
          Playstation/XBox/PC
        </title>
        <meta
          name="description"
          content="Get boosted by our professionals for a cheap price and achieve higher Ranks in Apex Legends. Our professionals consist of only All-seasons Apex predators. Veterans. 24/7 Live Chat Support. Cheap. Get boosted by the best. Same Day Deliver Ranked boost and Badge boost."
        />
        <meta name="theme-color" content="#008f68" />
      </Head>
      <Navbar></Navbar>
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
