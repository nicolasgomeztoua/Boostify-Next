import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import userImg from "../../public/assets/images/defaultuser.jpg";
import backgroundImage from "../../public/assets/images/profilebackground.jpg";
import ProfileCard from "./ProfileCard";
import OrderTracker from "./OrderTracker";

import generalStyles from "./general.module.css";

import MissedOrder from "./MissedOrder";
const Profile = () => {
  const [username, setUsername] = useState("");
  const [orders, setOrders] = useState([]);
  const [userId, setUserId] = useState([]);
  const [userImage, setUserImage] = useState(userImg);
  const history = useRouter();
  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get(
          "https://secret-cove-64633.herokuapp.com/api/private",
          config
        );
        console.log(data);
        setUsername(data.username);
        setUserId(data.user_id);
        setOrders(data.orders);
        if (data.image) {
          setUserImage(data.image);
        }
      } catch (error) {
        localStorage.removeItem("authToken");

        history.push("Authentication/Login" + window.location.search);
      }
    };

    fetchPrivateDate();
  }, [history]);
  return (
    <div>
      {" "}
      <div className={generalStyles["profile-page-container"]}>
        <div className={generalStyles["profile-background-grid"]}>
          <div
            className={generalStyles["profile-bloodhound"]}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <ProfileCard
            userImg={userImage}
            username={username}
            orderObj={orders}
          ></ProfileCard>
          <div
            className={generalStyles["profile-bloodhound"]}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <div
            className={
              generalStyles["profile-bloodhound profile-mobile-bloodhound"]
            }
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
        </div>
        <OrderTracker orderImg={userImg} orderObj={orders}></OrderTracker>
        <MissedOrder userId={userId}></MissedOrder>
      </div>
      {/*          */}
    </div>
  );
};

export default Profile;
