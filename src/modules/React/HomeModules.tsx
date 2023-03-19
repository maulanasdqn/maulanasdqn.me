import type { FC, ReactElement } from "react";
import { HOME_PAGE } from "@util/Constant"

const HomeModules: FC = (): ReactElement => {
  return (
    <section className="flex items-start justify-between w-full h-full gap-y-6 py-6">
      <div className="flex flex-col transition-all transform ease-in-out delay-500 gap-y-3 items-start h-auto">
        <h1 className="text-2xl lg:text-4xl text-white font-sans">
          {HOME_PAGE.TITLE}
        </h1>
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
        <button class="bg-transparent border-white border-2 rounded-lg text-white font-medium p-2">Download CV</button>
      </div>
    </section>
  );
};

export default HomeModules;
