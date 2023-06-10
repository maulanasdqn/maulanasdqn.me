import { Sidebar } from "@/components";
import type { FC, ReactElement } from "react";

export const TestModule: FC = (): ReactElement => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen">
      <Sidebar />
      <img
        src="/assets/me.webp"
        alt="Benget aing"
        width={400}
        height={400}
        loading={"eager"}
      />
      <h1 className="text-6xl font-semibold text-blue-400">
        Welcome to my guys
      </h1>
    </section>
  );
};
