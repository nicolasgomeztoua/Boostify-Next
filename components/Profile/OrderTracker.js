import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import generalStyles from "./general.module.css";
import pred from "../../public/assets/images/1.png";
import Image from "next/image";
const OrderTracker = ({ orderObj }) => {
  const Orders = orderObj;

  if (Orders.length === 0) {
    return (
      <>
        <h2
          className={generalStyles["whoAreWe-title profile-title"]}
          style={{ borderRadius: "50px", color: "white", marginBottom: "10px" }}
        >
          Track your orders with the All-Father&apos;s sight{" "}
        </h2>
        <div className={generalStyles["table"]}>
          <h2 className={generalStyles["heading"]}>Order Tracking</h2>
          <div className={generalStyles["block"]}>
            <h2 className={generalStyles["order-title"]}>
              {" "}
              No orders made on this boostify account.
            </h2>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h2
        className={generalStyles["whoAreWe-title profile-title"]}
        style={{ borderRadius: "50px", color: "white", marginBottom: "10px" }}
      >
        {" "}
        Track your orders with the All-Father&apos;s sight{" "}
      </h2>{" "}
      <div className={generalStyles["table"]}>
        <h2 className={generalStyles["heading"]}>Order Tracking</h2>

        {Orders.map((order, index) => {
          if (order.titles[0] === "Kills Boost") {
            return (
              <div className={generalStyles["block"]}>
                <p className={generalStyles["order-title"]}>{order.titles} </p>
                <span className={generalStyles["price"]}>
                  ${order.prices}/
                </span>{" "}
                <span
                  className={generalStyles[""]}
                  style={{ marginLeft: "50px" }}
                ></span>
                <ul className={generalStyles["options"]}>
                  <li>{order.kills} Kills</li>
                </ul>
                <div className={generalStyles["rank-circle-container"]}>
                  <div className={generalStyles["rank-circle-wrap"]}>
                    <CircularProgressbarWithChildren
                      value={order.progress}
                      style={{ width: 60, marginBottom: 5 }}
                      styles={{
                        // Customize the root svg element
                        root: {},
                        path: {
                          // Path color
                          stroke: `rgba(64,224,208)`,
                        },
                      }}
                    >
                      <Image
                        src={`/assets/images/${
                          order.rankedImg[0]?.split("/").pop().split(".")[0]
                        }.${
                          order.rankedImg[0]?.split("/").pop().split(".")[2]
                        }`}
                        alt="doge"
                        width={190}
                        height={190}
                      />
                    </CircularProgressbarWithChildren>{" "}
                    <div
                      style={{
                        fontSize: "22.3px",
                        marginTop: 15,
                        paddingBottom: "15px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <strong>{order.progress}%</strong>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div className={generalStyles["block"]} key={Math.random()}>
              {order.titles.map((title, index) => {
                return (
                  <p
                    key={title + index}
                    className={generalStyles["order-title"]}
                  >
                    {title}
                  </p>
                );
              })}
              <span className={generalStyles["price"]}>${order.prices}/</span>{" "}
              <span
                className={generalStyles[""]}
                style={{ marginLeft: "50px" }}
              ></span>
              <ul className={generalStyles["options"]}>
                <li>
                  <p className={generalStyles["order-title"]}>
                    {" "}
                    {order.selectedLegend}
                  </p>
                </li>
                <li>{order.selectedPopBadges}</li>
                <li>{order.selectedExtraBadges}</li>{" "}
                {order.firstValue[0] !== null ? (
                  <li>
                    <p className={generalStyles["order-title"]}>From:</p>
                    {order.firstValue}
                    <p className={generalStyles["order-title"]}>To:</p>
                    {order.secondValue}
                  </li>
                ) : (
                  <li>No Rank Boost</li>
                )}{" "}
              </ul>
              <div className={generalStyles["rank-circle-container"]}>
                <div className={generalStyles["rank-circle-wrap"]}>
                  <CircularProgressbarWithChildren
                    value={order.progress}
                    style={{ width: 60, marginBottom: 5 }}
                    styles={{
                      // Customize the root svg element
                      root: {},
                      path: {
                        // Path color
                        stroke: `rgba(64,224,208)`,
                      },
                    }}
                  >
                    <Image
                      src={`/assets/images/${
                        order.rankedImg[0]?.split("/").pop().split(".")[0]
                      }.${order.rankedImg[0]?.split("/").pop().split(".")[2]}`}
                      alt="doge"
                      width={90}
                      height={90}
                    />
                  </CircularProgressbarWithChildren>{" "}
                  <div
                    style={{
                      fontSize: "22.3px",
                      marginTop: 15,
                      paddingBottom: "15px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <strong>{order.progress}%</strong>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OrderTracker;
