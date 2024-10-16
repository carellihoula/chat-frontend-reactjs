// SingleMessage.tsx
import React from "react";
import { Message } from "../../types__interfaces/interface";
import styled from "styled-components";
import { users } from "../../mock/users";

interface SingleMessageProps {
  message: Message;
}

const SingleMessage: React.FC<SingleMessageProps> = ({ message }) => {
  const messageDate = new Date(message.timestamp);

  // Formater la date au format jour/mois/année
  const formattedDate = messageDate.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const user = users.find((user) => user.id === message.senderId);

  // Formater l'heure en heures:minutes (format 24h)
  const formattedTime = messageDate.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  console.log(message);
  return (
    <SingleMessageStyled className="message flex items-start">
      <div className="avatar mr-4">
        <div className="w-16 rounded-full">
          <img src={user?.avatar} alt={message.content} />
        </div>
      </div>
      <div className="message-content">
        <p>
          <strong className="sender__name">{user?.username}</strong>
          <small className=" date ml-2">
            {formattedDate} {formattedTime}
          </small>
        </p>
        <p className="message">{message.content}</p>
      </div>
    </SingleMessageStyled>
  );
};

export default SingleMessage;

const SingleMessageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  margin-bottom: 10px;
  width: 90%;
  height: auto;

  &:hover {
    background: #3f4248;
    border-radius: 10px 0 10px 0;
  }
  .message {
    display: flex;
    align-items: flex-start;
    margin-bottom: 15px;
  }

  .avatar {
    margin-right: 15px;
  }

  .avatar img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  .message-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 80%;
  }

  .message-content p {
    margin: 0;
    padding: 0;
  }

  .sender__name {
    color: #f2f3f5;
    font-size: 1.2rem;
  }
  .message {
    color: #bfc1c5;
  }
  .date {
    color: #bfc1c5;
  }
`;
