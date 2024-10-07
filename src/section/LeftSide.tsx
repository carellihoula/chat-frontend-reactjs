import styled from "styled-components";
import ConversationList from "../components/ConversationList";
import { users } from "../mock/users";
import SearchBar from "../components/SearchBar";
import CopyRightFragment from "../components/CopyRightFragment";
import Settings from "../pages/Settings";
import { useState } from "react";
import { useMenu } from "../context/MenuContext";

const LeftSide = () => {
  const { selectedMenuId } = useMenu();
  const handleClick = (id: number) => {
    alert(`Clicked person with ID: ${id}`);
  };

  const renderContent = () => {
    switch (selectedMenuId) {
      case 1:
        return null;
      case 2:
        return (
          <>
            <SearchBar />
            <ConversationList onPersonClick={handleClick} person={users} />;
          </>
        );

      case 3:
        return <Settings />;
      default:
        return null;
    }
  };
  return (
    <LeftSideStyled>
      {renderContent()}
      <CopyRightFragment />
    </LeftSideStyled>
  );
};

export default LeftSide;

const LeftSideStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: #2b2d31;
  width: 30%;
  position: relative;
`;
