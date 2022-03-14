import ResetPassword from "../../../components/Authentication/ResetPassword";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";

const ForgotPasswordPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <ResetPassword></ResetPassword>
      <Footer footerColor="turquoise" />
    </>
  );
};

export default ForgotPasswordPage;