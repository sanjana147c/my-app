import React from "react";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  FolderIcon,
  WrenchScrewdriverIcon,
  TrophyIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

function Navbar() {
  const icons = [
    { Icon: HomeIcon, href: "#home" },
    { Icon: UserIcon, href: "#about" },
    { Icon: FolderIcon, href: "#projects" },
    { Icon: WrenchScrewdriverIcon, href: "#skills" },
    { Icon: BriefcaseIcon, href: "#experience" },
    { Icon: TrophyIcon, href: "#achievements" },
    { Icon: EnvelopeIcon, href: "#contact" },
  ];
  return (
    <div className="w-full flex justify-center mt-6">
      <nav className="bg-[#1d1a24] text-white px-6 py-3 shadow-lg rounded-full inline-flex">
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
