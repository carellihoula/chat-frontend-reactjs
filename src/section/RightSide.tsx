import styled from "styled-components";
import MessageInput from "../components/message/MessageInput";
import SingleMessage from "../components/message/SingleMessage";
import { messages as initialMessages } from "../mock/messages";
import ChatHeader from "../components/ChatHeader";
import { users } from "../mock/users";
import { useEffect, useRef, useState } from "react";
import { Message } from "../types__interfaces/interface";

const RightSide = () => {
  const [messages, setMessages] = useState(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = (messageContent: string) => {
    console.log("Message sent:", messageContent);
    const newMessage: Message = {
      id: messages.length + 1,
      sender: "Vous",
      receiver: "Alice",
      content: messageContent,
      timestamp: new Date(),
      senderPhoto: "https://randomuser.me/api/portraits/men/1.jpg",
    };
    setMessages([...messages, newMessage]);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };
  //console.log(messages);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <RightSideStyled>
      <ChatHeader person={users[0]} />
      <Messages>
        {messages.map((message) => (
          <SingleMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
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
