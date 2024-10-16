import styled from "styled-components";
import { IoMdContacts } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";

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

// Styled component for each menu item
const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  padding: 10px;
  border-radius: 5px;

  cursor: pointer;

  &:hover {
    background: #3f4248;
  }
`;

// Placeholder icons as text, you can replace these with your icon components
const MenuBarPhone = () => {
  return (
    <MenuBarContainer>
      <MenuItem>
        <div className="avatar">
          <div className="mask mask-squircle w-12">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="https://randomuser.me/api/portraits/men/1.jpg"
              className="menu-img"
            />
          </div>
        </div>
      </MenuItem>
      <MenuItem>
        <LiaUserFriendsSolid size={36} color="#FFF" />
      </MenuItem>
      <MenuItem>
        <IoChatbubblesOutline size={36} color="#FFF" />
      </MenuItem>
      <MenuItem>
        <CiSettings size={36} color="#FFF" />
      </MenuItem>
    </MenuBarContainer>
  );
};

export default MenuBarPhone;
