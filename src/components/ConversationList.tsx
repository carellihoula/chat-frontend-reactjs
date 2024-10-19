import React from "react";
import { Person } from "../types__interfaces/interface";
import { users } from "../mock/users";
import PersonItem from "./PersonItem";
import styled from "styled-components";
import { getUserIdFromToken } from "../utils/auth";

interface ConversationListProps {
  person: Person[];
  onPersonClick: (idPerson: string) => void;
}

export const ConversationList: React.FC<ConversationListProps> = ({
  onPersonClick,
}) => {
  // Filtrer les utilisateurs pour exclure l'utilisateur connecté (id: 1)
  const token = localStorage.getItem("token");

  const usersFiltered = users.filter(
    (user) => token && user.id !== getUserIdFromToken(token)
  );
  return (
    <ConvListStyled>
      {usersFiltered.map((person) => (
        <div key={person.id} className="person__list">
          <PersonItem
            id={person.id}
            name={person.username}
            photo={person.avatar}
            onClick={onPersonClick}
            status={person.status}
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

  @media (max-width: 402px) {
    display: none;
  }
`;
