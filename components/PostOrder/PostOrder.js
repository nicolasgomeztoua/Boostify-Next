import { Filter1 } from "@styled-icons/material-twotone/Filter1";
import { Filter2 } from "@styled-icons/material-twotone/Filter2";
import { Filter3 } from "@styled-icons/material-twotone/Filter3";
import { Filter4 } from "@styled-icons/material-twotone/Filter4";
import styled from "styled-components";
import styles from "./PostOrder.module.css";
import { walzyEditThis } from "../../utils/stats";

const Step1 = styled(Filter1)`
  height: 50px;
  color: #40e0d0;
  margin: 10px;
`;
const Step2 = styled(Filter2)`
  height: 50px;
  color: #40e0d0;
  margin: 10px;
`;
const Step3 = styled(Filter3)`
  height: 50px;
  color: #40e0d0;
  margin: 10px;
`;
const Step4 = styled(Filter4)`
  height: 50px;
  color: #40e0d0;
  margin: 10px;
`;

const PostOrder = () => {
  let randomNumber = Math.floor(Math.random() * 10) + 10;
  return (
    <>
      <div className={styles.post_order}>
        <h1 className={styles.whoAreWe_title}>What happens after you order?</h1>
        <div className={styles.post_order_wrap}>
          <div className={styles.post_order_container}>
            <div className={styles.post_order_card}>
              <div className={styles.post_order_card_image}></div>
              <div className={styles.post_order_card_text}>
                <span className={styles.date}>
                  <Step1></Step1>
                </span>
                <h2>
                  Check Your <br></br>PSN/XBOX email!
                </h2>
                <p style={{ height: "50px" }}>
                  {" "}
                  Check your order details thouroughly in the confirmation email
                  sent to your PSN email. <br />
                  <strong className={styles.strong_desc}>
                    <i>*Please check spam due to automated sending*</i>
                  </strong>
                </p>
              </div>
              <div className={styles.post_order_card_stats}>
                <div className={styles.stat}></div>
                <div className={`${styles.stat} ${styles.border}`}>
                  <div className={styles.value}>
                    {walzyEditThis.ordersCompleted}
                  </div>
                  <div className={styles.type}>Emails Sent</div>
                </div>
                <div className={styles.stat}></div>
              </div>
            </div>
          </div>{" "}
          <div className={styles.post_order_container}>
            <div className={styles.post_order_card}>
              <div
                className={`${styles.post_order_card_image} ${styles.step2} `}
                id="step2"
              ></div>
              <div className={styles.post_order_card_text}>
                <span className={styles.date}>
                  <Step2></Step2>
                </span>
                <h2>Booster Assignment</h2>
                <p>
                  Within 24h of purchase your booster will be assigned. And
                  complete your order in those next &nbsp;
                  <strong className={styles.strong_desc}>
                    <i>48h.</i>
                  </strong>
                  <br></br>
                </p>
              </div>
              <div className={styles.post_order_card_stats}>
                <div className={styles.stat}></div>
                <div className={`${styles.stat} ${styles.border}`}>
                  <div className={styles.value}>{randomNumber}</div>
                  <div className={styles.type}>Boosters Available</div>
                </div>
                <div className={styles.stat}></div>
              </div>
            </div>
          </div>
          <div className={styles.post_order_container}>
            <div className={styles.post_order_card}>
              <div className={`${styles.post_order_card_image} ${styles.step3} `} id="step3"></div>
              <div className={styles.post_order_card_text}>
                <span className={styles.date}>
                  <Step3></Step3>
                </span>
                <h2>Check Your Profile Page</h2>
                <p>
                  Track the progress of orders you`&apos;`ve made with Boostify.
                  Live Booster chat coming soon! <br></br>
                  <strong className={styles.strong_desc}>
                    <i> *Profile page only available to boostify users*</i>
                  </strong>
                </p>
              </div>
              <div className={styles.post_order_card_stats}>
                <div className={styles.stat}></div>
                <div className={`${styles.stat} ${styles.border}`}>
                  <div className={styles.value}>
                    {walzyEditThis.ordersQueued}
                  </div>
                  <div className={styles.type}>Current Orders</div>
                </div>
                <div className={styles.stat}></div>
              </div>
            </div>
          </div>
          <div className={styles.post_order_container}>
            <div className={styles.post_order_card}>
              <div className={`${styles.post_order_card_image} ${styles.step4} `} id="step4"></div>
              <div className={styles.post_order_card_text}>
                <span className={styles.date}>
                  <Step4></Step4>
                </span>
                <h2>Enjoy!</h2>
                <p>
                  Upon completion you will receive an order completion email to
                  your login email or PSN/XBOX email.
                  <br />
                  <strong className={styles.strong_desc}>
                    <i> Enjoy your boost!</i>
                  </strong>
                </p>
              </div>
              <div className={styles.post_order_card_stats}>
                <div className={styles.stat}></div>
                <div className={styles.stat && styles.border}>
                  <div className={styles.value}>
                    {(walzyEditThis.ordersCompleted / 2).toFixed(0)}
                  </div>
                  <div className={styles.type}>Returning Customers</div>
                </div>
                <div className={styles.stat}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostOrder;
