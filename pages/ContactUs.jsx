import ContactUs from "../components/Authentication/ContactUs";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";
const Cart = () => {
  return (
    <>
      <Head>
        <title>
          Boostify | Contact us about any doubts you may have regarding our Apex
          Legends Boosting Services.
        </title>
        <meta
          name="description"
          content="Boostify has a dedicated team in place to reply to any of your concerns about our Apex Legends Boosting Services 24/7. We have over 1200 completed orders and a very high rating review score."
        />
        <meta name="theme-color" content="turquoise" />
      </Head>
      <Navbar></Navbar>
      <ContactUs></ContactUs>
      <Footer footerColor="turquoise" />
    </>
  );
};

export default Cart;
