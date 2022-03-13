import CartPage from "../components/Cart/CartPage";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Cart = () => {
  return (
    <>
      <Navbar></Navbar>
      <CartPage></CartPage>
      <Footer footerColor="turquoise" />
    </>
  );
};

export default Cart;
