import React, { useState, useEffect } from "react";

import { BagCheckFill } from "@styled-icons/bootstrap/BagCheckFill";
import { UserClock } from "@styled-icons/fa-solid/UserClock";
import { CalendarExclamation } from "@styled-icons/boxicons-regular/CalendarExclamation";
import styled from "styled-components";
import styles from "./Home.module.css"
import CountUp from 'react-countup';

export const walzyEditThis = {
  ordersCompleted: 1321,
  ordersQueued: 8,
};
const Completed = styled(BagCheckFill)`
  height: 50px;
  color: #40e0d0;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const InProgress = styled(UserClock)`
  height: 50px;
  color: #40e0d0;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const TimeLeft = styled(CalendarExclamation)`
  height: 50px;
  color: #40e0d0;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Stats = () => {
  const [d, sd] = useState(0);
  const ordersCompleted = walzyEditThis.ordersCompleted
  useEffect(() => {
  
      const now = new Date().getTime();
      const countDate = new Date("may 10 2022 18:00");
      let gap = countDate - now;
      let second = 1000;
      let minute = second * 60;
      let hour = minute * 60;
      let day = hour * 24;
      sd(Math.floor(gap / day));
 
  }, []);

  return (
    <div className={styles["home-banner"]}>
      <div>
        <h4>
          {" "}
          <CountUp
            end={ordersCompleted.toFixed(0)}
            style={{
              fontSize: 43.96,
            }}
            duration={9}
   
          />
        </h4>
        <div id={styles["icon-counter"]}>
          <Completed></Completed>
        </div>
        <p>Orders Completed</p>
      </div>
      <div>
        <h4>
          <CountUp
            end={7}
            style={{
              fontSize: 43.96,
            }}
            duration={10}
            formatValue={(n) => n.toFixed(0)}
            frameStyle={(percentage) =>
              percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
            }
          />
        </h4>
        <div id={styles["icon-counter"]}>
          <InProgress></InProgress>
        </div>
        <p>Orders Queued</p>
      </div>
      <div>
        {" "}
        <h4>
          <CountUp
            end={d}
            style={{
              fontSize: 43.96,
            }}
            duration={10}
            formatValue={(n) => n.toFixed(0)}
            frameStyle={(percentage) =>
              percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
            }
          />{" "}
        </h4>
        <div id={styles["icon-counter"]}>
          <TimeLeft></TimeLeft>
        </div>
        <p>Remaining split</p>
      </div>
    </div>
  );
};

export default Stats;
