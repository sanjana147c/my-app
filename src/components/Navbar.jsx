import React from "react";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  WrenchIcon,
  TrophyIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

function Navbar() {
  const icons = [
    { Icon: HomeIcon, href: "#" },
    { Icon: UserIcon, href: "#" },
    { Icon: BriefcaseIcon, href: "#" },
    { Icon: WrenchIcon, href: "#" },
    { Icon: TrophyIcon, href: "#" },
    { Icon: EnvelopeIcon, href: "#" },
  ];

  return (
    <div className="w-full flex justify-center mt-6">
      <nav className="bg-[#242424] text-white px-6 py-3 shadow-lg rounded-full inline-flex">
        <div className="flex items-center space-x-6">
          {icons.map(({ Icon, href }, idx) => (
            <a
              key={idx}
              href={href}
              className="text-white transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-125 hover:text-gray-300"

            >
              <Icon className="h-8 w-8" />
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
