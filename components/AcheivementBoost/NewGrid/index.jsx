import styles from "../Acheivementbadges.module.css";
import { CheckLabel } from "../../ProductComponents/ProductElements";
import Image from "next/image";

export default function NewGrid({ array, checkedBadges, handleChange }) {
  return (
    <div className={styles["newGrid"]}>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {array.map((Items) => (
          <li
            key={Items.email}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8 mx-auto h-150 w-160 flex-shrink-0 rounded-full">
              <Image
                width={170}
                height={170}
                src={Items.icon.src}
                alt="badge"
              />

              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {Items.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Price</dt>
                <dd className="mt-3">
                  {Items.price ? (
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      {Items.price}$
                    </span>
                  ) : null}
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <CheckLabel className={styles["check"]} key={Items.key}>
                  <input
                    type="checkbox"
                    className={styles["inputCheck"]}
                    name={Items.name}
                    checked={checkedBadges[Items.name]}
                    onChange={handleChange}
                  />

                  <div className={styles["box"]}></div>
                </CheckLabel>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
