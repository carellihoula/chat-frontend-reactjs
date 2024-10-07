import React from "react";
import MenuBar from "../section/MenuBar";
import LeftSide from "../section/LeftSide";
import RightSide from "../section/RightSide";
import styled from "styled-components";
import { MenuProvider } from "../context/MenuContext";

type Props = {};

export const Home = (props: Props) => {
  return (
    <MenuProvider>
      <HomeStyled>
        <MenuBar />
        <LeftSide />
        <RightSide />
      </HomeStyled>
    </MenuProvider>
  );
};

const HomeStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;
