import React from "react";
import { MenuItems } from "../MenuItems/MenuItems";
import Link from "next/link";
import Image from "next/image";
import styles from "../Dropdown/Dropdown.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Navigation,
  Scrollbar,
  EffectCoverflow,
  Autoplay,
} from "swiper/core";

SwiperCore.use([Navigation, Scrollbar, EffectCoverflow, Autoplay]);
const ProdMenu = ({ border }) => {
  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      scrollbar={{ draggable: true }}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      style={{ margin: "20px" }}
      breakpoints={{
        // when window width is >= 640px
        0: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        481: {
          slidesPerView: 2,
        },
        769: {
          slidesPerView: 3,
        },
        1201: {
          slidesPerView: 4,
        },
      }}
    >
      <ul className={styles.prodMenu} style={{ borderBottom: border }}>
        {MenuItems.map((item, index) => {
          return (
            <SwiperSlide
              style={{ marginBottom: "30px", marginTop: "30px" }}
              key={item.path + index}
            >
              <li key={index} className={styles.MenuItemsWrapper}>
                <Link
                  passHref
                  href={`${item.path}${
                    typeof window !== "undefined"
                      ? window?.location.search
                      : null
                  }`}
                  className={item.cName}
                >
                  <div className={styles.Icon_Title_container}>
                    <p className={styles.MenuItemTitle}>{item.title}</p>
                    <div
                      className={`${styles.MenuRankedBoostIcon}${item.cNameIcon}`}
                    >
                      <Image
                        width={170}
                        height={155}
                        src={item.icon}
                        alt=" boost icons"
                      ></Image>
                    </div>
                  </div>
                </Link>
              </li>
            </SwiperSlide>
          );
        })}
      </ul>
    </Swiper>
  );
};

export default ProdMenu;
