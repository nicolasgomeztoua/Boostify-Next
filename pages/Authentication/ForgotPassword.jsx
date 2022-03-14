import ForgotPassword from "../../components/Authentication/ForgotPassword";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const ForgotPasswordPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <ForgotPassword></ForgotPassword>
      <Footer footerColor="turquoise" />
    </>
  );
};

export default ForgotPasswordPage;