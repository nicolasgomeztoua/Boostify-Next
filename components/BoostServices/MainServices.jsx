import { UserInjured } from "@styled-icons/fa-solid/UserInjured";
import { AnglesUp } from "@styled-icons/fa-solid/AnglesUp";
import { Badge } from "@styled-icons/open-iconic/Badge";
import { Timer } from "@styled-icons/boxicons-regular/Timer";
import Image from "next/image";
import Link from "next/link";

const transferFeatures = [
  {
    id: 1,
    name: "Avoid Headaches",
    description:
      "From playing the game solo with misinterpreted and often downright bad teamates, to tedious grinding for a sweet victory only to be scraped away by RNG hotdrops, the ranked grind can just make the game unenjoyable. That's where we come in.",
    icon: UserInjured,
  },
  {
    id: 2,
    name: "Have fun again!",
    description:
      "Rank Boost will help you get out of the boring grind and back to competitiveness and fun. Simply select your current RP and your desired RP in our selection cards. Dont just boost your rp, but get a valuable lesson with it with our DuoQueue feature! Squad up with our professionals and learn from the best.",
    icon: AnglesUp,
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: "Stop trying your luck",
    description:
      "Don't depend on SBMM to give you a lucky game for your favourite badges. Pick and choose the way you highlight your best character's banner with Acheivement Boost. Just select and search from our vast variety of badges. For any special character badges, please drop us a support ticket in the contact page",
    icon: Badge,
  },
  {
    id: 2,
    name: "Your time is valuable",
    description:
      "We understand that not all players can afford to spend the time for that 20 kill or 4K damage match, or the tens of badges available in Apex. This is why we take pride in our pros and their extremley fast delivery of any badge boosting needs. ",
    icon: Timer,
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
                className="text-gray-200"
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
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
            We provide professional solutions for individuals looking to boost
            their account. From Rank Boosts to custom orders, our products and
            services have been designed thinking of saftey and speed, to help
            anyone enjoy Apex Legends.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              What is Apex Legends Ranked Boosting?
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              In Ranked you drop against 19 other teams. You earn RP (Ranked
              Points) for successful matches and you climb up in Ranked. Your
              highest tier is shown to friends and other players, determening
              your prestige. Ranked Boosting is the best way to get your rank.
              We will grind on your account or one of our pros will squad up
              with you!
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
                  href={`/rank-boosting${
                    typeof window !== "undefined"
                      ? window?.location.search
                      : null
                  }`}
                >
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-teal-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Buy Rank Boosting
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
                    className="text-gray-200"
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
            <Image
              className="relative mx-auto"
              width={490}
              height={490}
              src="/assets/images/octaneHome.png"
              alt="octane"
            />
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
                className="text-gray-200"
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

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                What is Badge Boosting?
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                In Apex Legends, exceptional achievements are rewarded with
                badges to illustrate on your banner. Plant fear into your
                enemies before the match even starts with our badge boosting
                service! Choose from any of the of badges available in our badge
                boosting section and our pros will hop on and shred.
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
                    href={`/acheivement-badges${
                      typeof window !== "undefined"
                        ? window?.location.search
                        : null
                    }`}
                  >
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-transparent bg-teal-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Buy Badge Boosting
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
                      className="text-gray-200"
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
              <Image
                className="relative mx-auto"
                width={490}
                height={490}
                src="/assets/images/AshHome.png"
                alt="Ash"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
