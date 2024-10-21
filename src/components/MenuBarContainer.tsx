import React, { useState } from "react";
import styled from "styled-components";
//import { IoMdContacts } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import MenuItemComponent from "../components/MobilePhoneScreen/MenuItemComponent";
import { useMenu } from "../context/MenuContext";

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
  // State to keep track of the selected menu, "chat" is default
  const [selectedMenu, setSelectedMenu] = useState<string>("chat");
  const { selectedMenuId, setSelectedMenuId } = useMenu();

  return (
    <MenuBarContainer>
      <MenuItemComponent
        icon={
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Profile"
            style={{ width: 36, borderRadius: "50%" }}
          />
        }
        onClick={() => {
          setSelectedMenuId(1);
          setSelectedMenu("profile");
        }}
        isSelected={selectedMenu === "profile"}
      />
      <MenuItemComponent
        icon={<IoChatbubblesOutline size={36} color="#FFF" />}
        onClick={() => {
          setSelectedMenuId(2);
          setSelectedMenu("chat");
        }}
        isSelected={selectedMenu === "chat"}
      />
      <MenuItemComponent
        icon={<LiaUserFriendsSolid size={36} color="#FFF" />}
        onClick={() => {
          setSelectedMenuId(3);
          setSelectedMenu("friends");
        }}
        isSelected={selectedMenu === "friends"}
      />
      <MenuItemComponent
        icon={<CiSettings size={36} color="#FFF" />}
        onClick={() => {
          setSelectedMenuId(4);
          setSelectedMenu("settings");
        }}
        isSelected={selectedMenu === "settings"}
      />
    </MenuBarContainer>
  );
};

export default MenuBarPhone;
