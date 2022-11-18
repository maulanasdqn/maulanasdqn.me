import type { FC, ReactElement } from "react";
import Button from "@components/Common/Button";
import { LINKDIN, NAVBAR_MENU } from "@util/Constant";

const Navbar: FC = (): ReactElement => {
  return (
    <header className="flex items-center py-6 px-12 bg-white justify-between w-full">
      <figure className="flex items-center">
        <figcaption className="text-xl font-bold font-sans text-black">
          Maulana | Personal Web
        </figcaption>
      </figure>
      <nav className="md:flex hidden items-center gap-x-4">
        {NAVBAR_MENU.map((x, key) => (
          <span
            key={key}
            className="font-[600] hover:text-yellow-500 hover:border-b-2 cursor-pointer text-base"
          >
            {x}
          </span>
        ))}
      </nav>
      <a href={LINKDIN} target={"_blank"}>
        <Button type="button" text="Hire Me!" />
      </a>
    </header>
  );
};

export default Navbar;
