import { CartProvider } from "../hooks/Cart/CartHandler";
import "../styles/globals.css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "react-circular-progressbar/dist/styles.css";
import "react-toastify/dist/ReactToastify.css";
import TagManager from "react-gtm-module";
import tawkTo from "tawkto-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCallback, useEffect } from "react";
import { useCookies } from "react-cookie";
import { SessionProvider } from "next-auth/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-NXPK262",
    };
    TagManager.initialize(tagManagerArgs);
    //END GTM
  }, []);

  let cookies = useCookies();

  const notify = useCallback(() => {
    toast.success(
      "Click here for a free 4k & 20Kill badge with your next rank boost to masters order",
      {
        position: "top-right",

        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClick: () => {
          window.location.pathname = "/SpecialPacks";
        },
      }
    );
  }, []);

  //TAWK
  const tawkToPropertyId = "6073390df7ce1827093946a1";

  const tawkToKey = "1f311dno9";

  useEffect(() => {
    if (cookies[0].Special && window.location.pathname !== "/SpecialPacks") {
      notify();
    }

    new tawkTo(tawkToPropertyId, tawkToKey);
  }, [notify, cookies]);

  return (
    <SessionProvider session={session}>
      <CartProvider>
        <ToastContainer
          position="top-right"
          autoClose={60000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          style={{ marginTop: "10vh" }}
          draggable
          pauseOnHover
        />
        <Component {...pageProps} />
      </CartProvider>
    </SessionProvider>
  );
}

export default MyApp;
