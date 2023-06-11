import { FC, ReactElement } from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export const StoryBlokPage: FC<any> = ({ blok }): ReactElement => (
  <main className="flex flex-col items-center" {...storyblokEditable(blok)}>
    <div className="flex flex-col items-center gap-y-4">
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  </main>
);
