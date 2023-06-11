import { motion } from "framer-motion";
import { FC, ReactElement } from "react";
import { AiFillProject, AiFillContacts, AiFillHome, AiFillProfile } from "react-icons/ai";

const _sidebar_item = [
  {
    icon: <AiFillHome size={30} />,
    label: "Home",
  },
  {
    icon: <AiFillProfile size={30} />,
    label: "About",
  },
  {
    icon: <AiFillContacts size={30} />,
    label: "Contact",
  },
  {
    icon: <AiFillProject size={30} />,
    label: "Project's",
  },
];

export const Sidebar: FC = (): ReactElement => (
  <motion.aside
    className="bg-[#485364] shadow-sm shadow-primary-300 rounded-lg flex-col gap-y-2 p-2 text-gray-50 flex items-center justify-center"
    style={{
      position: "fixed",
      width: "4rem",
      height: "auto",
      right: -130,
      bottom: "calc(50% - 6rem)",
    }}
    animate={{
      x: -140,
    }}
  >
    {_sidebar_item.map((item, index) => (
      <div
        key={index}
        className="bg-primary-300 group relative hover:rounded-full transition-all duration-100 delay-75 rounded-lg p-2 w-full items-center"
      >
        {item.icon}
        <span className="absolute hidden text-right bg-primary-300 rounded-lg bg-cover p-1 top-3 right-[72px] w-[70px] group-hover:flex justify-center items-center">
          {item.label}
        </span>
      </div>
    ))}
  </motion.aside>
);
