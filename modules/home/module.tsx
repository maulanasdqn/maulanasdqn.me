"use client";
import { FC, Fragment, ReactElement } from "react";
import { StoryblokComponent } from "@storyblok/react";
import { IconCloud, IconStar } from "@/components";

type THomeProps = {
  story: any;
};

export const HomeModule: FC<THomeProps> = ({ story }): ReactElement => {
  return (
    <Fragment>
      <IconStar
        x={Math.floor(Math.random() * 100 * 2)}
        className={`text-white mx-[200px] fixed z-0 top-0`}
      />
      <StoryblokComponent blok={story} />;
    </Fragment>
  );
};
