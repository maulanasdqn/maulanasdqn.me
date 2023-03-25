import type { FC, ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HOME_PAGE } from "@util/Constant";

const HomeModules: FC = (): ReactElement => {
  return (
    <AnimatePresence>
      <section className="flex items-start justify-between w-full h-full gap-y-6 py-6">
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
            left: -100,
          }}
          animate={{
            opacity: 1,
            height: "auto",
            left: 100,
          }}
          exit={{
            opacity: 0,
            height: 0,
            left: -100,
          }}
          className="flex flex-col transition-all transform ease-in-out delay-500 gap-y-3 items-start h-auto"
        >
          <motion.h1
            initial={{
              left: 20,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              left: 100,
            }}
            exit={{
              height: 0,
              left: 20,
            }}
            className="text-2xl lg:text-4xl text-white font-sans"
          >
            {HOME_PAGE.TITLE}
          </motion.h1>
          <span className="flex text-4xl font-lato font-700 font-italic text-red-500 lg:text-5xl">
            {HOME_PAGE.ME}
          </span>
          <span className="flex text-1xl font-sans text-white lg:text-2xl">
            {HOME_PAGE.ROLE}
          </span>
          <p className="text-white font-lato font-600">
            {HOME_PAGE.STORY}
            <a
              className="hover:border-b-2 hover:border-white border-b-2 border-transparent"
              target="_blank"
              href={HOME_PAGE.LINK}
            >
              @psudevteam
            </a>
          </p>
          <button
            type="button"
            className="bg-transparent border-white border-2 rounded-lg text-white font-medium p-2"
          >
            Download CV
          </button>
        </motion.div>
      </section>
    </AnimatePresence>
  );
};

export default HomeModules;
