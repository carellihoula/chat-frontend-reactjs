//import React from "react";
import MenuBar from "../section/MenuBar";
import LeftSide from "../section/LeftSide";
import RightSide from "../section/RightSide";
import styled from "styled-components";
import { useSelectedUser } from "../context/SelectedUserContext";

export const Home = () => {
  const { selectedUser } = useSelectedUser();
  return (
    <HomeStyled>
      <MenuBar />
      <LeftSide />
      <RightSide selectedUserId={selectedUser?.id ?? null} />
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;
