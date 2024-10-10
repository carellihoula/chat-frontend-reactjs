import styled from "styled-components";
import MessageInput from "../components/message/MessageInput";
import SingleMessage from "../components/message/SingleMessage";
import { messages as initialMessages } from "../mock/messages";
import ChatHeader from "../components/ChatHeader";
import { users } from "../mock/users";
import { useEffect, useRef, useState } from "react";
import { Message } from "../types__interfaces/interface";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

interface RightSideProps {
  selectedUserId: number | null; // Typage de selectedUserId
}

const RightSide: React.FC<RightSideProps> = ({ selectedUserId }) => {
  const [messages, setMessages] = useState(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = (messageContent: string) => {
    if (!selectedUserId) return;

    console.log("Message sent:", messageContent);
    const newMessage: Message = {
      id: messages.length + 1,
      senderId: 1,
      receiverId: selectedUserId,
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

  // Trouver l'utilisateur sélectionné
  const selectedUser = users.find((user) => user.id === selectedUserId);

  // Filtrer les messages par l'utilisateur sélectionné
  const filteredMessages = messages.filter(
    (msg) =>
      (msg.senderId === selectedUserId || msg.receiverId === selectedUserId) &&
      (msg.senderId === 1 || msg.receiverId === 1)
  );

  return (
    <RightSideStyled>
      {selectedUserId && selectedUser ? (
        <>
          <ChatHeader person={selectedUser} />
          <Messages>
            {filteredMessages.map((message) => (
              <SingleMessage key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </Messages>
          <MessageInput onSendMessage={handleSendMessage} />
        </>
      ) : (
        <LogoContainer>
          <h1>Connect Instantly. Chat Effortlessly</h1>
          <IoChatbubbleEllipsesOutline color="#FFF" size={300} />
          <h2>Click on a Person to Start the Conversation</h2>
        </LogoContainer>
      )}
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

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;

  h1 {
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  h2 {
    color: #fff;
    font-size: 1.5rem;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
`;
