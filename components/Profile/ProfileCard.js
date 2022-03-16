import Image from "next/image";
import styles from "./general.module.css";
const ProfileCard = ({ userImg, username, orderObj }) => {
  return (
    <div>
      <main className={styles["container-profile-profile-card"]}>
        <div className={styles["profile-card"]}>
          <div className={styles["profile-card__image"]}>
            <Image width={100} height={100} src={userImg} alt="User " />
          </div>
          <div className={styles["profile-card__text"]}>
            <h2>{username}</h2>
          </div>
          <ul className={styles["profile-card__info"]}>
            <li>
              <span className={styles["profile-card__info__stats"]}>
                {orderObj.length}
              </span>
              <span>{orderObj.length > 1 ? "Orders" : "Order"}</span>
            </li>
          </ul>
          {/*<ul>
            <li>
              <span className={styles["profile-card__info__stats">47</span>
              <span>followers</span>
            </li>
            <li>
              <span className={styles["profile-card__info__stats">20</span>
              <span>following</span>
            </li>
          </ul> */}
        </div>
      </main>
    </div>
  );
};

export default ProfileCard;
