import Navbar from "@components/React/Navbar";
import MainLayout from "@layouts/React/Main";
import ContentLayout from "@layouts/React/Content";
import { FC, Fragment, ReactElement } from "react";

const HomeModules: FC = (): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <MainLayout>
        <ContentLayout>
          <section className="flex flex-col items-start justify-start w-full h-full py-6">
            <div className="flex flex-col transition-all transform ease-in-out delay-500 gap-x-6 items-start h-auto">
              <h1 className="text-7xl lg:text-8xl text-white font-sans">
                Hi iam
              </h1>
              <span className="flex text-3xl font-sans text-red-500 lg:text-5xl">Maulana Sodiqin</span>
            </div>
          </section>
        </ContentLayout>
      </MainLayout>
    </Fragment>
  );
};

export default HomeModules;
