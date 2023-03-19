import type { FC, ReactElement } from "react";
import Button from "@components/React/Common/Button";
import { LINKDIN, NAVBAR_MENU } from "@util/Constant";

const Navbar: FC = (): ReactElement => {
  return (
    <header className="sticky top-0 shadow-gray-700 shadow-sm bg-gray-800 z-10 flex items-center py-6 px-6 md:px-12 justify-between w-full">
      <figure className="flex items-center">
        <figcaption className="text-xl font-bold font-sans text-white">
          Maulana | Personal Web
        </figcaption>
      </figure>
      <nav className="md:flex hidden items-center gap-x-4">
        {NAVBAR_MENU.map((menu, key) => (
          <a
            key={key}
            href={menu.link}
            className="font-600 font-lato hover:text-red-500 hover:border-b-2 hover:border-red-500 border-b-2 border-transparent cursor-pointer text-base text-white"
          >
            {menu.name}
          </a>
        ))}
      </nav>
      <Button
        to={LINKDIN}
        target="_blank"
        className="bg-red-700 w-auto h-auto p-2 text-white font-medium rounded-lg"
        type="button"
        text="Hire Me!"
      />
    </header>
  );
};

export default Navbar;
