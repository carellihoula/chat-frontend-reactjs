import React from "react";
import { Person } from "../types__interfaces/interface";
import PersonItem from "./PersonItem";
import styled from "styled-components";
import { getUserIdFromToken } from "../utils/auth";
import { useSelectedUser } from "../context/SelectedUserContext";
import { useUserContext } from "../context/UsersListContext";
import { useSocket } from "../context/SocketContext";

interface ConversationListProps {
  person: Person[];
  onPersonClick: (idPerson: string) => void;
}

export const ConversationList: React.FC<ConversationListProps> = ({
  onPersonClick,
}) => {
  const { selectedUser } = useSelectedUser();
  const { users } = useUserContext();
  const { messages } = useSocket();
  // Filtrer les utilisateurs pour exclure l'utilisateur connecté (id: 1)
  const token = localStorage.getItem("token");

  //get id of currentUser
  const userId = token && getUserIdFromToken(token);

  //  displays users with whom you have at least one conversation
  const usersWithConversations = users.filter((user) =>
    messages.some(
      (message) =>
        (message.senderId === user._id && message.recipientId === userId) ||
        (message.senderId === userId && message.recipientId === user._id)
    )
  );

  return (
    <ConvListStyled>
      {usersWithConversations.map((person) => (
        <div key={person._id} className="person__list">
          <PersonItem
            id={person._id}
            name={person.username}
            photo={person.avatar}
            onClick={onPersonClick}
            status={person.status}
            isSelected={person._id === selectedUser?._id}
          />
        </div>
      ))}
    </ConvListStyled>
  );
};

export default ConversationList;

const ConvListStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .person__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    //for debugging => background: red;
    //background-color: yellow;
    padding: 8px;
  }
`;
