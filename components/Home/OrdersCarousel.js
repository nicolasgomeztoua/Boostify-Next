import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Scrollbar,
  EffectCoverflow,
  Autoplay,
} from "swiper/core";

import { orders } from "./OrdersData";
import Image from "next/image";
import styles from "../Reviews/CSS/Testimonials.module.css";
import home from "./Home.module.css";
SwiperCore.use([Navigation, Scrollbar, EffectCoverflow, Autoplay]);
const OrdersCarousel = () => {
  return (
    <div className={home["OrdersCarousel-container"]}>
      <h3
        className={home["OrdersCarousel-title"]}
        id={home["recentlyDeliveredOrders"]}
      >
        Recently Delivered Orders{" "}
      </h3>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        style={{ height: "360px" }}
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          481: {
            slidesPerView: 1,
          },
          769: {
            slidesPerView: 2,
          },
          1201: {
            slidesPerView: 3,
          },
        }}
      >
        {orders.map((order, index) => {
          return (
            <SwiperSlide key={index + Math.random()}>
              <div
                className={styles["swiper_slide"]}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                  minWidth: "315px",
                }}
              >
                <div
                  className={styles["card"]}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "5px",
                    minWidth: "315px",
                    maxWidth: "315px",
                    height: "315px",
                  }}
                >
                  {" "}
                  <Image
                    src={order}
                    alt="completed order"
                    className={styles["orderimg"]}
                  ></Image>{" "}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default OrdersCarousel;
