//import React from "react";
import MenuBar from "../section/MenuBar";
import LeftSide from "../section/LeftSide";
import RightSide from "../section/RightSide";
import styled from "styled-components";
import { useSelectedUser } from "../context/SelectedUserContext";
import MenuBarPhone from "../components/MenuBarContainer";
import { useMediaQuery } from "react-responsive";

export const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const { selectedUser, setSelectedUser } = useSelectedUser();

  const handleReturn = () => {
    setSelectedUser(null);
  };
  return (
    <HomeStyled>
      {!isMobile && <MenuBar />} {/* Show MenuBar only on non-mobile */}
      <LeftSide />
      {!isMobile && (
        <RightSide
          selectedUserId={selectedUser?._id ?? null}
          onReturn={handleReturn}
        />
      )}
      {/* RightSide hidden on mobile */}
      {isMobile && <MenuBarPhone />} {/* Show mobile MenuBar */}
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;
