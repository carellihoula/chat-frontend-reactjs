import React, { useState } from "react";
import styled from "styled-components";
//import { IoMdContacts } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import MenuItemComponent from "../components/MobilePhoneScreen/MenuItemComponent";
import { useMenu } from "../context/MenuContext";
import { menuItems } from "../utils/menu";

// Styled component for the menu bar
const MenuBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #2b2d31;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: content-box;

  @media (min-width: 481px) {
    display: none; /* Hide the menu bar on larger screens */
  }
`;

const MenuBarPhone = () => {
  const { selectedMenuId, setSelectedMenuId } = useMenu();

  return (
    <MenuBarContainer>
      {menuItems.map((item) => (
        <MenuItemComponent
          key={item.id}
          icon={item.icon}
          image={item.imgUrl}
          onClick={() => {
            setSelectedMenuId(item.id);
          }}
          isSelected={selectedMenuId === item.id}
        />
      ))}
    </MenuBarContainer>
  );
};

export default MenuBarPhone;
