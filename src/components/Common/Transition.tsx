import { motion } from "framer-motion";
import type { FC, ReactElement, ReactNode } from "react";
const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
type p = {
  children: ReactNode;
};
const Transitions: FC<p> = ({ children }): ReactElement => {
  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 3 }}
    >
      {children}
    </motion.div>
  );
};
export default Transitions;
