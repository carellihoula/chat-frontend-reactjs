import styled from "styled-components"
import ConversationList from "../components/ConversationList"
import { users } from "../mock/users";
import SearchBar from "../components/SearchBar";


const LeftSide = () => {
  const handleClick = (id: number) => {
    alert(`Clicked person with ID: ${id}`);
  };
  return (
    <LeftSideStyled>
      <SearchBar/>
      <ConversationList onPersonClick={handleClick} person={users}/>
    </LeftSideStyled>
  )
}

export default LeftSide

const LeftSideStyled = styled.div`
    display: flex;
    flex-direction: column;
    background : #2B2D31;
    width: 30%;

`
