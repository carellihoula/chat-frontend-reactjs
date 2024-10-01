import styled from "styled-components";
import MessageInput from "../components/message/MessageInput";
import SingleMessage from "../components/message/SingleMessage";
import { messages } from "../mock/messages";

const RightSide = () => {
  const handleSendMessage = (message: string) => {
    console.log("Message sent:", message);
  };
  return (
    <RightSideStyled>
      <Messages>
        {messages.map((message) => (
          <SingleMessage key={message.id} message={message} />
        ))}
      </Messages>

      <MessageInput onSendMessage={handleSendMessage} />
    </RightSideStyled>
  );
};

export default RightSide;

const RightSideStyled = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  background: #313338;
  position: relative;
  padding: 20px 0;
  width: 65%;
  height: 100%;
`;

const Messages = styled.div`
  display: flex;
  flex-direction: column;
  //background: red;
  //justify-content: center;
  align-items: center;
  //background: #313338;
  position: relative;
  padding: 20px 0;
  margin-bottom: 50px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;
