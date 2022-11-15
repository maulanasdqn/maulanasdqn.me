import Navbar from "@components/Navbar";
import MainLayout from "layouts/Main";
import ContentLayout from "layouts/Content";
import { FC, Fragment, ReactElement } from "react";
import me from "/assets/me.jpg";

const HomeModules: FC = (): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <MainLayout>
        <ContentLayout>
          <section className="flex flex-col items-start justify-start w-full h-full py-6">
            <div className="flex transition-all transform ease-in-out delay-500 gap-x-6 items-center h-auto">
              <h1 className="text-6xl lg:text-9xl text-black-900 font-sans">
                Hi iam
              </h1>
              <span className="flex text-3xl lg:hidden">Maulana</span>
              <span className="rounded-xl hidden items-center lg:flex text-4xl lg:text-5xl w-auto text-white font-sans bg-green-600 px-4 w-auto h-[100px]">
                FE Dev
              </span>
            </div>
            <h1 className="text-6xl lg:block text-black-900 font-sans">
              Maulana Sodiqin
            </h1>
            <h1 className="text-4xl block lg:hidden text-black-900 font-sans">
              Frontend
            </h1>
          </section>
        </ContentLayout>
        <ContentLayout>
          <img src={me} alt="" />
        </ContentLayout>
      </MainLayout>
    </Fragment>
  );
};

export default HomeModules;
