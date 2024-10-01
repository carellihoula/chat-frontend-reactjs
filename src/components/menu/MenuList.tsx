import React from "react";
import { IMenuItem } from "../../types__interfaces/interface";
import MenuItem from "./ItemMenu";
import styled from "styled-components";

interface ListItemProps {
  items: IMenuItem[];
}

const MenuList: React.FC<ListItemProps> = ({ items }) => {
  return (
    <MenuStyled className="menu-list">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </MenuStyled>
  );
};

export default MenuList;

const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  //background: red;
  padding: 10px;
`;
