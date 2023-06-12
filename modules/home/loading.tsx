import { FC, ReactElement } from "react";

export const HomeLoading: FC = (): ReactElement => (
  <main className="flex flex-col items-center gap-y-4">
    <div className="md:w-[400px] w-[200px] h-[200px] bg-gray-700 md:h-[400px] rounded-full animate-pulse" />
    <div className="flex flex-col gap-y-3 w-full items-center">
      <div className="w-1/2 bg-gray-700 h-[40px] rounded-lg animate-pulse" />
      <div className="w-[80%] bg-gray-700 h-[30px] rounded-lg animate-pulse" />
    </div>
  </main>
);
