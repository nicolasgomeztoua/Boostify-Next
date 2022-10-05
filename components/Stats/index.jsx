import { useState, useEffect } from "react";
import { walzyEditThis } from "../../utils/stats";
import CountUp from "react-countup";
export default function Stats() {
  const [d, sd] = useState(0);
  const ordersCompleted = walzyEditThis.ordersCompleted;
  useEffect(() => {
    const now = new Date().getTime();
    const countDate = new Date(walzyEditThis.date);
    let gap = countDate - now;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    sd(Math.floor(gap / day));
  }, []);

  return (
    <div className="bg-gray-50 pt-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The preferred platform of the top 750 in the EU
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Here&apos;s our mileage:
          </p>
        </div>
      </div>
      <div className="mt-10 bg-white pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Orders Completed:
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight "style={{color:"turquoise"}}>
                    {" "}
                    <CountUp
                      end={ordersCompleted.toFixed(0)}
                      style={{
                        fontSize: 43.96,
                      }}
                      duration={9}
                    />
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Orders Queued
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight "style={{color:"turquoise"}}>
                    <CountUp
                      end={7}
                      style={{
                        fontSize: 43.96,
                      }}
                      duration={10}
                      formatValue={(n) => n.toFixed(0)}
                      frameStyle={(percentage) =>
                        percentage > 20 && percentage < 80
                          ? { opacity: 0.5 }
                          : {}
                      }
                    />
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Remaining split
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight "style={{color:"turquoise"}}>
                    <CountUp
                      end={d}
                      style={{
                        fontSize: 43.96,
                      }}
                      duration={10}
                      formatValue={(n) => n.toFixed(0)}
                      frameStyle={(percentage) =>
                        percentage > 20 && percentage < 80
                          ? { opacity: 0.5 }
                          : {}
                      }
                    />
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
