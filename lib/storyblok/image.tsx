import { storyblokEditable } from "@storyblok/react";
import { FC, ReactElement } from "react";
import Image from "next/image";

export const StoryBlokImage: FC<any> = ({ blok }): ReactElement => (
  <Image
    {...storyblokEditable(blok)}
    src={blok.image.filename}
    width={400}
    height={400}
    alt="its me"
    loading="eager"
    priority
    quality={100}
    className="md:w-[400px] md:h-[400px] w-[200px] h-[200px]"
  />
);
