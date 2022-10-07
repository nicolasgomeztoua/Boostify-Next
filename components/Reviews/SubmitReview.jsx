import { useEffect, useState } from "react";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./CSS/Testimonials.module.css";
import auth from "../Authentication/AuthComponents.module.css";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const SubmitReview = () => {
  const history = useRouter();
  const notify = () => {
    toast.success("Your review has been submitted. Thanks!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      history.reload();
    }, 5000);
  };
  const [rating, setRating] = useState(0);
  const { data: session, status } = useSession();
  const [userImg, setUserImage] = useState("");
  const [name, setName] = useState();
  const [review, setReview] = useState("");

  const dateFormat = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  let dateFormated = new Date().getTime();
  let dateCreated = new Date(dateFormated).toLocaleDateString(
    "en-UK",
    dateFormat
  );
  useEffect(() => {
    if (session) {
      setUserImage(session.user.image);
    } else {
      setUserImage("/assets/images/user.png");
    }
  }, [session]);

  const reviewHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Access-Control-Allow-Origin":
          "https://secret-cove-64633.herokuapp.com/api/auth/reviews",
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        "https://secret-cove-64633.herokuapp.com/api/auth/reviews",
        { name, review, rating, dateCreated, userImg },
        config
      );
      notify();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
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
      <div className={styles["review-container"]}>
        <form
          onSubmit={reviewHandler}
          className={auth["login-screen__form"]}
          style={{
            position: "relative",
            width: "100%",
            margin: "0 auto",
            padding: "60px 40px",
            overflow: "hidden",
            height: "530px",
          }}
        >
          <h3 className={auth["login-screen__title"]}>Leave Us A Review!</h3>

          <div className={auth["form-group"]}>
            <label htmlFor="name">Name (optional)</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              tabIndex={1}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className={auth["form-group"]}>
            <label htmlFor="text">Your review:</label>
            <textarea
              type="text"
              required
              id="review"
              placeholder="..."
              tabIndex={1}
              onChange={(e) => {
                setReview(e.target.value);
              }}
            />
          </div>
          <div className={styles["stars-rating"]}>
            <Rating
              precision={0.5}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              value={rating}
              name="rating"
              onChange={(e, newValue) => {
                setRating(newValue);
              }}
            />
          </div>
          <button
            type="submit"
            className={`${auth["form-btn"]} ${auth["form-btn-primary"]}`}
            disabled={review.length === 0 ? true : false}
          >
            Submit Review
          </button>
        </form>
      </div>
    </>
  );
};

export default SubmitReview;
