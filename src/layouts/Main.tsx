import type { FC, ReactElement, ReactNode } from "react";

type MainLayoutTypes = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutTypes> = ({ children }): ReactElement => {
  return (
    <section className="flex w-full h-screen justify-between px-12">
      {children}
    </section>
  );
};

export default MainLayout;
