import React from "react";
import { Outlet } from "react-router-dom";
import { Menu, Nav } from "../../../components/Admin";

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <div className="bg-white flex">
        <Menu />
        <div className="p-5 w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
