import styled from "styled-components"
import MessageInput from "../components/message/MessageInput"


const RightSide = () => {
  const handleSendMessage = (message: string) => {
    console.log('Message sent:', message);
    
  };
  return (
    <RightSideStyled>
      <MessageInput onSendMessage={handleSendMessage}/>
    </RightSideStyled>
  )
}

export default RightSide

const RightSideStyled = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    background : #313338;
    position: relative;

    width: 65%;
    height: 100%;

`