import React from "react";
import { IMenuItem } from "../../types__interfaces/interface";
import styled from "styled-components";

interface MenuItemProps {
  item: IMenuItem;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <MenuStyled className="menu-item">
      {item.icon && <item.icon size={35} className="icon" />}
      {item.imgUrl && (
        <div className="avatar">
          <div className="mask mask-squircle w-16">
            <img src={item.imgUrl} alt={item.title} className="menu-img" />
          </div>
        </div>
      )}
    </MenuStyled>
  );
};

export default MenuItem;

const MenuStyled = styled.div`
  padding: 5px;
  .icon {
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: content-box;
  }
  .icon:hover {
    background: #3f4248;
  }
  .avatar:hover {
    cursor: pointer;
  }
`;
