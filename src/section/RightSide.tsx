import styled from "styled-components";
import MessageInput from "../components/message/MessageInput";
import SingleMessage from "../components/message/SingleMessage";
import ChatHeader from "../components/ChatHeader";
import { users } from "../mock/users";
import { useEffect, useRef } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useSocket } from "../context/SocketContext";
import { useAuth } from "../context/AuthContext";

interface RightSideProps {
  selectedUserId: string | null; // Typage de selectedUserId
}

const RightSide: React.FC<RightSideProps> = ({ selectedUserId }) => {
  const { messages, sendMessage, setRecipientId } = useSocket();
  const { userId } = useAuth();
  console.log("user: " + userId);
  //const [messages, setMessages] = useState(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = (messageContent: string) => {
    if (!selectedUserId || !userId) return;

    sendMessage(messageContent, selectedUserId, userId);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };

  //console.log(messages);
  useEffect(() => {
    if (selectedUserId) {
      setRecipientId(selectedUserId);
    }
  }, [selectedUserId, setRecipientId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Trouver l'utilisateur sélectionné
  const selectedUser = users.find((user) => user.id === selectedUserId);

  // Filtrer les messages pour n'afficher que ceux entre l'utilisateur connecté et le sélectionné
  const filteredMessages = messages.filter(
    (message) =>
      (message.senderId === userId && message.recipientId === selectedUserId) ||
      (message.senderId === selectedUserId && message.recipientId === userId)
  );
  console.log("list :" + typeof messages);
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
  @media (max-width: 480px) {
    width: 100%;
  }
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

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    h1 {
      color: #fff;
      font-size: 1.2rem;
      font-weight: bold;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
    }
    h2 {
      display: none;
      color: #fff;
      font-size: 1rem;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      z-index: 3;
      margin-bottom: 60px;
    }
  }
`;
