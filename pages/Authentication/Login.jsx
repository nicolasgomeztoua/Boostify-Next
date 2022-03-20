import Login from "../../components/Authentication/Login";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";
import { getSession } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import Oauth from "../../utils/Oauth";
const LoginPage = ({ user }) => {
  console.log(user);

  if (user) {
    Oauth(user.name, user.email, user.email, user.image);
  }

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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar></Navbar>
      <Login></Login>
      <Footer footerColor="turquoise" />
    </>
  );
};

export default LoginPage;
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    return {
      props: {},
    };
  }
  const { user } = session;
  return {
    props: { user },
  };
}
