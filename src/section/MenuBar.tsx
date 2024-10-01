import styled from "styled-components";
import { menuItems } from "../utils/menu";
import MenuList from "../components/menu/MenuList";

export const MenuBar = () => {
  return (
    <MenuStyled>
      <MenuList items={menuItems} />
    </MenuStyled>
  );
};

export default MenuBar;

const MenuStyled = styled.div`
  background: #1e1f22;
  width: 5%;
  color: white;
`;
