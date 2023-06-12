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
      {[
        {
          x: -120,
          y: 200,
        },
        {
          x: -260,
          y: 260,
        },
        {
          x: -300,
          y: 400,
        },
        {
          x: -1000,
          y: 40,
        },
        {
          x: -1200,
          y: 700,
        },
        {
          x: -660,
          y: 260,
        },
        {
          x: -500,
          y: 400,
        },
        {
          x: -600,
          y: 40,
        },
      ].map((item, key) => (
        <IconStar key={key} x={item.x} y={item.y} />
      ))}
      <StoryblokComponent blok={story} />
    </Fragment>
  );
};
