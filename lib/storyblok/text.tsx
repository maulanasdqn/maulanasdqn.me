import { storyblokEditable } from "@storyblok/react";
import { FC, ReactElement } from "react";
import { AiFillFacebook, AiFillLinkedin, AiFillMail, AiFillRedEnvelope } from "react-icons/ai";

export const StoryBlokText: FC<any> = ({ blok }): ReactElement => (
  <div className="flex relative z-10 gap-y-2 items-center flex-col" {...storyblokEditable(blok)}>
    <h1 className="text-primary-100 text-1xl sm:text-4xl font-semibold">{blok.name}</h1>
    <h2 className="text-primary-100 sm:text-2xl font-medium">{blok.about}</h2>
    <div className="flex w-auto gap-x-4">
      <AiFillLinkedin size={60} color="white" />
      <AiFillFacebook size={60} color="white" />
      <AiFillMail size={60} color="white" />
    </div>
  </div>
);
