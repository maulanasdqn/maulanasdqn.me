import { motion, useMotionValue, useTransform } from "framer-motion";
import { FC, ReactElement, useRef, useState } from "react";
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
  const ref = useRef<HTMLDivElement>(null);
  const mouseY = useMotionValue(0);
  const distance = useTransform(mouseY, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });
  return (
    <motion.aside
      onMouseMove={(event) => {
        mouseY.set(event.clientY);
      }}
      className="bg-[#485364] sm:bottom-[40%] bottom-10 shadow-sm shadow-primary-300 rounded-xl md:flex-col md:w-16 w-auto left-[20%] translate-x-[20%] sm:left-[30px] gap-x-4 flex-row gap-y-4 p-2 text-gray-50 flex items-center justify-center"
      style={{
        position: "fixed",
        height: "auto",
      }}
      initial={{
        x: -120,
      }}
      animate={{
        x: 0,
        y: 0,
      }}
      exit={{
        x: 0,
        y: -120,
      }}
    >
      {_sidebar_item.map((item, index) => (
        <motion.div
          ref={ref}
          animate={{
            borderRadius: 10,
          }}
          whileTap={{
            borderRadius: 100,
            scaleX: 1.7,
            scaleY: 1.7,
          }}
          whileHover={{
            borderRadius: 100,
            scaleX: 1.4,
            scaleY: 1.4,
          }}
          transition={{
            borderRadius: 100,
          }}
          key={index}
          className="bg-primary-300 group justify-center flex relative p-2 h-auto w-auto items-center"
        >
          {item.icon}
          <motion.span
            animate={{
              x: -3,
            }}
            className="absolute group-hover:flex hidden text-center bg-primary-300 rounded-lg bg-cover p-1 bottom-14 md:bottom-0 sm:top-2 sm:left-[60px] w-[70px] justify-center items-center"
          >
            {item.label}
          </motion.span>
        </motion.div>
      ))}
    </motion.aside>
  );
};
