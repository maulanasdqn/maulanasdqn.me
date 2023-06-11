"use client";
import "./globals.css";
import { PropsWithChildren } from "react";
import { Roboto } from "next/font/google";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { QueryProvider, StoryBlokPage, StoryBlokText, StoryBlokImage } from "@/lib";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const components = {
  page: StoryBlokPage,
  Text: StoryBlokText,
  Image: StoryBlokImage,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORY_BLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
  components,
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <body className={roboto.className + " bg-primary-base"}>
        <main className="flex min-h-screen flex-col items-center justify-center">
          <QueryProvider>{children}</QueryProvider>
        </main>
      </body>
    </html>
  );
}
