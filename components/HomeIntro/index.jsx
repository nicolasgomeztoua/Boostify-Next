import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import { GameController } from "@styled-icons/entypo/GameController";
import { Support } from "@styled-icons/boxicons-regular/Support";
import { VerifiedUser } from "@styled-icons/material-twotone/VerifiedUser";

const features = [
  {
    name: "The Very Very Very Strongest",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: GameController,
  },
  {
    name: "Client support 24/7",
    description:
      "Customer support is here for you. if you have any inquiries or doubts about the process please feel free to leave us a message or an email through our Contact Us page.",
    icon: Support,
  },
  {
    name: "Security is our #1 concern",
    description:
      "We take the security of our customers very seriously. Ensuring we precautiously perform the task for the quickest, most hassle-free experience we can deliver; Trust is our asset.",
    icon: VerifiedUser,
  },
];

export default function HomeIntro() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold" style={{color:"turquoise"}}>Our Pride And Joy</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Looking to boost your account to the next echelon?
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
        We have a strong link with the predator community, so we are
                their preferred platform as known members of the ecosystem. We
                can ensure service from the best.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span
                        className="inline-flex items-center justify-center rounded-md p-3 shadow-lg"
                        style={{ backgroundColor: "#40e0d0" }}
                      >
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
