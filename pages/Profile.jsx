import Profile from "../components/Profile/Profile";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";
const Cart = () => {
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
      <Navbar></Navbar>
      <Profile></Profile>
      <Footer footerColor="turquoise" />
    </>
  );
};

export default Cart;
