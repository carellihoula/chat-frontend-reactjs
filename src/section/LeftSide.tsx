import styled from "styled-components"
import ConversationList from "../components/ConversationList"
import { users } from "../mock/users";


const LeftSide = () => {
  const handleClick = (id: number) => {
    alert(`Clicked person with ID: ${id}`);
  };
  return (
    <LeftSideStyled>
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
