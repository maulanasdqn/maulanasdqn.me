"use client";
import { FC, Fragment, ReactElement } from "react";
import { StoryblokComponent } from "@storyblok/react";
import { IconCloud, IconCresentMoon, IconStar } from "@/components";

type THomeProps = {
  story: any;
};

export const HomeModule: FC<THomeProps> = ({ story }): ReactElement => {
  return (
    <Fragment>
      <IconCresentMoon y={0} x={0} className={`text-white w-screen left-[30%] fixed z-0 top-0`} />
      <StoryblokComponent blok={story} />;
    </Fragment>
  );
};
