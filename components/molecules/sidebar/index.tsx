import { motion } from "framer-motion";
import { FC, ReactElement, useState } from "react";
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

export const Sidebar: FC = (): ReactElement => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.aside
      className="bg-[#485364] shadow-sm shadow-primary-300 rounded-lg flex-col gap-y-2 p-2 text-gray-50 flex items-center justify-center"
      style={{
        position: "fixed",
        width: "4rem",
        height: "auto",
        right: -120,
        bottom: "calc(50% - 6rem)",
      }}
      animate={{
        x: -140,
      }}
    >
      {_sidebar_item.map((item, index) => (
        <motion.div
          animate={{
            borderRadius: 10,
          }}
          whileHover={{
            borderRadius: 100,
            scaleX: 1.4,
            scaleY: 1.4,
            marginBottom: 16,
            marginTop: 16,
          }}
          transition={{
            borderRadius: 100,
          }}
          key={index}
          className="bg-primary-300 group relative p-2 w-full items-center"
        >
          {item.icon}
          <motion.span
            style={{
              display: isHover ? "flex" : "none",
            }}
            animate={{
              x: -3,
            }}
            className="absolute text-center bg-primary-300 rounded-lg bg-cover p-1 top-3 right-[72px] w-[70px] justify-center items-center"
          >
            {item.label}
          </motion.span>
        </motion.div>
      ))}
    </motion.aside>
  );
};
