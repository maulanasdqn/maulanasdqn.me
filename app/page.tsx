"use client";
import { useGetStoryBlok } from "@/lib";
import { HomeLoading, HomeModule } from "@/modules";
import { NextPage } from "next";
import { ReactElement } from "react";
import { match } from "ts-pattern";

const Home: NextPage = (): ReactElement => {
  const { data, isLoading, isSuccess } = useGetStoryBlok({
    version: process.env.NEXT_PUBLIC_ENV === "production" ? "published" : "draft",
  });
  return match({ isLoading, isSuccess, data: data?.data?.story?.content })
    .with({ isLoading: true, isSuccess: false }, () => <HomeLoading />)
    .with({ isLoading: true, isSuccess: true }, () => <HomeLoading />)
    .with({ isLoading: false, isSuccess: false }, () => <span>Gagal memuat Component</span>)
    .with({ isLoading: false, isSuccess: true }, ({ data }) => <HomeModule story={data} />)
    .exhaustive();
};

export default Home;
