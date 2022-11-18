import type { FC, ReactElement, ReactNode } from "react";

type ContentLayoutTypes = {
  children: ReactNode;
};

const ContentLayout: FC<ContentLayoutTypes> = ({ children }): ReactElement => {
  return (
    <section className="flex flex-col items-center w-full lg:w-1/2">{children}</section>
  );
};

export default ContentLayout;
