import React from "react";
import { Outlet } from "react-router-dom";
import { Menu, Nav } from "../../../components/Admin";
import * as S from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <S.Body>
        <Menu />
        <S.Container>
          <Outlet />
        </S.Container>
      </S.Body>
    </>
  );
};

export default Home;
