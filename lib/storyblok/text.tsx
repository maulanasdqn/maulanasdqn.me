import { storyblokEditable } from "@storyblok/react";
import { FC, ReactElement } from "react";

export const StoryBlokText: FC<any> = ({ blok }): ReactElement => (
  <div className="flex gap-y-2 items-center flex-col" {...storyblokEditable(blok)}>
    <h1 className="text-primary-100 text-4xl font-semibold">{blok.name}</h1>
    <h2 className="text-primary-100 text-2xl font-medium">{blok.about}</h2>
  </div>
);
