import { Button, StepContainer } from "./signupstyles";
import smoothscroll from "smoothscroll-polyfill";
import styles from "./CSS/Redirect.module.css";
const Step = ({ icon, textfile, containerRef, step, pusher, d, h, m, s }) => {
  const Icon = icon;
  const iconStyles = { height: "100px" };
  if (typeof window !== "undefined") {
    smoothscroll.polyfill();
  }
  function scrollToRight() {
    containerRef.current.scrollTo({
      left: step * window.innerWidth,
      behavior: "smooth",
    });
  }

  return (
    <StepContainer>
      <div className={styles["services"]}>
        <div className={`${styles["content-typ"]} ${styles["content-1"]}`}>
          <Icon style={iconStyles}></Icon>
          <h2>{textfile.title}</h2>
          <h2> {textfile.time === true ? d + h + m + s : ""}</h2>
          <p>{textfile.body}</p>
          <Button
            background={"black"}
            color={"white"}
            border={"none"}
            onClick={pusher ? pusher : scrollToRight}
          >
            {textfile.button}
          </Button>
        </div>
      </div>
    </StepContainer>
  );
};

export default Step;
