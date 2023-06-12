import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactElement } from "react";

export const IconStar: FC<{ x: number; y: number }> = ({ x, y }): ReactElement => (
  <AnimatePresence>
    <motion.svg
      className="border-primary-100"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
      }}
      animate={{
        width: [5, 10, 5],
        height: [5, 10, 5],
        rotate: 360,
        x: [x, x],
        y: [y, y],
        opacity: [0, 20, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      fill={"#fff"}
      viewBox="0 0 122.88 122.88"
    >
      <g>
        <path
          className="st0"
          d="M62.43,122.88h-1.98c0-16.15-6.04-30.27-18.11-42.34C30.27,68.47,16.16,62.43,0,62.43v-1.98 c16.16,0,30.27-6.04,42.34-18.14C54.41,30.21,60.45,16.1,60.45,0h1.98c0,16.15,6.04,30.27,18.11,42.34 c12.07,12.07,26.18,18.11,42.34,18.11v1.98c-16.15,0-30.27,6.04-42.34,18.11C68.47,92.61,62.43,106.72,62.43,122.88L62.43,122.88z"
        />
      </g>
    </motion.svg>
  </AnimatePresence>
);
