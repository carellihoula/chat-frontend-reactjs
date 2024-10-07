import React from "react";
import { IMenuItem } from "../../types__interfaces/interface";
import styled from "styled-components";
import { Tooltip } from "react-tooltip";
import { useMenu } from "../../context/MenuContext";

interface MenuItemProps {
  item: IMenuItem;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { setSelectedMenuId, selectedMenuId } = useMenu();

  const handleClick = () => {
    setSelectedMenuId(item.id); // Mettre à jour l'ID sélectionné
  };
  return (
    <>
      <MenuStyled
        className="menu-item"
        data-tooltip-id={`tooltip-${item.id}`}
        data-tooltip-content={item.title}
        onClick={handleClick}
      >
        {item.icon && (
          <item.icon
            size={35}
            className={`icon ${selectedMenuId === item.id && "selected"}`}
          />
        )}
        {item.imgUrl && (
          <div className="avatar">
            <div className="mask mask-squircle w-16">
              <img src={item.imgUrl} alt={item.title} className="menu-img" />
            </div>
          </div>
        )}
      </MenuStyled>
      <Tooltip id={`tooltip-${item.id}`} place="left" style={{ zIndex: 2 }} />
    </>
  );
};

export default MenuItem;

const MenuStyled = styled.div`
  padding: 5px;
  .selected {
    background: #3f4248;
    border-radius: 5px;
  }
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
