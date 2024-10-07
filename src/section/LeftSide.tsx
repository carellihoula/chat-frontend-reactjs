import styled from "styled-components";
import ConversationList from "../components/ConversationList";
import { users } from "../mock/users";
import SearchBar from "../components/SearchBar";
import CopyRightFragment from "../components/CopyRightFragment";
import Settings from "../pages/Settings";

const LeftSide = () => {
  const handleClick = (id: number) => {
    alert(`Clicked person with ID: ${id}`);
  };
  return (
    <LeftSideStyled>
      {/*<SearchBar />
      <ConversationList onPersonClick={handleClick} person={users} />*/}
      <Settings />
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
