import Navbar from "@components/React/Navbar";
import MainLayout from "@layouts/React/Main";
import { FC, Fragment, ReactElement } from "react";
import type { CommonTypes } from "@util/Types";

const HomeModules: FC<CommonTypes> = ({ children }): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <MainLayout>{children}</MainLayout>
    </Fragment>
  );
};

export default HomeModules;
