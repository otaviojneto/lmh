import React, { useState } from "react";
import { Hamburguer } from "../../components";
import { Links } from "../../mocks";
import theme from "../../styles";

import { Brand, Container, Menu, OpenProps } from "./styles";

const Nav: React.FC<OpenProps> = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Container>
      <Brand href="#" />

      <Hamburguer
        color={theme.colors.black}
        onClick={() => setOpenMenu(!openMenu)}
        isOpen={openMenu}
      />

      <Menu isOpen={openMenu}>
        <ul>
          {Links.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </Menu>
    </Container>
  );
};

export default Nav;
