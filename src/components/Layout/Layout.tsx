import React from "react";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";

interface Props {
  children: JSX.Element;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex items-center justify-between w-screen h-screen fixed top-0 left-0 bg-layoutcolor ">
        <SideBar />
        <div className="w-full h-screen relative top-0 left-0 overflow-y-scroll">
          <NavBar />
          <div className="px-4 md:px-6">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
