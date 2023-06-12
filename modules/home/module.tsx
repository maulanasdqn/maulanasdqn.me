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
      <IconCresentMoon />
      <IconStar />
      <StoryblokComponent blok={story} />
    </Fragment>
  );
};
