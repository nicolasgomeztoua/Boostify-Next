import { PlusSlashMinus } from "@styled-icons/bootstrap/PlusSlashMinus";
import { Badge } from "@styled-icons/open-iconic/Badge";
import { Timer } from "@styled-icons/boxicons-regular/Timer";
import Image from "next/image";
import Link from "next/link";
import { Offer } from "@styled-icons/boxicons-solid/Offer";
const transferFeatures = [
  {
    id: 1,
    name: "Endless Cycle",
    description:
      "We all know how the grind goes +12s and -48s in arenas ranked, break the cycle and enter the ranks where you belong. For strategical and frankly, fun gameplay.",
    icon: PlusSlashMinus,
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: "Free Stuff!",
    description:
      "We specifically instruct our boosters to go hard in the paint with every boost. Meaning unlike other services, they wont stop if they approach 4k damage or 20 Kills. With our Kills Boost service you could get one of those badges for free!",
    icon: Offer,
  },
];

export default function MainServices() {
  return (
    <div className="overflow-hidden bg-gray-50 py-16 lg:py-24">
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <svg
          className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                style={{ color: "turquoise" }}
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative">
          <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Other Services
          </h2>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              What is Kills Boosting?
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              KD Ratio makes or breaks your entire Apex experience. It decides
              who you play against and with who; This means many apex legends
              players suffer, as they made their account when they were just
              starting out and now play a suboptimal experience.
            </p>

            <dl className="mt-10 space-y-10">
              {communicationFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-teal-400 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
              <div className="w-100 flex justify-center">
                <Link
                  passHref
                  href={`/kills-boosting${
                    typeof window !== "undefined"
                      ? window?.location.search
                      : null
                  }`}
                >
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-teal-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Buy Kills Boosting
                  </button>
                </Link>
              </div>
            </dl>
          </div>

          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    style={{ color: "turquoise" }}
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <div className="flex justify-center">
              <div className="max-w-1/4">
                <Image
                  className="relative mx-auto"
                  width={290}
                  height={290}
                  src="/assets/images/killsboost.png"
                  alt="Kills Boost"
                />
              </div>
            </div>
          </div>
        </div>

        <svg
          className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                style={{ color: "turquoise" }}
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-48 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                What is Arenas Boosting?
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Arenas matches take place on smaller maps which creates hectic
                3v3 battles where your team will attempt to win three rounds
                with a two-round margin. Unfortunatley Arenas is no fun until
                high diamond level. On the lower ranks Respawn utilizes
                balancing SBMM to place you with teamates ranging from One up to
                TWO whole ranks below you. Let us help you feel the true
                tactical and competive nature of arenas with our boosting
                service.
              </p>

              <dl className="mt-10 space-y-10">
                {transferFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-teal-400 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
                <div className="w-100 flex justify-center">
                  <Link
                    passHref
                    href={`/Arenas-Boost${
                      typeof window !== "undefined"
                        ? window?.location.search
                        : null
                    }`}
                  >
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-transparent bg-teal-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Buy Arenas Boosting
                    </button>
                  </Link>
                </div>
              </dl>
            </div>

            <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
              <svg
                className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      style={{ color: "turquoise" }}
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <div className="flex justify-center">
                <div className="max-w-1/4">
                  <Image
                    className="relative mx-auto"
                    width={290}
                    height={290}
                    src="/assets/images/ArenaMaster.png"
                    alt="Arenas Boost"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
