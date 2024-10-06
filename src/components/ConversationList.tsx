import React from "react";
import { Person } from "../types__interfaces/interface";
import { users } from "../mock/users";
import PersonItem from "./PersonItem";
import styled from "styled-components";

interface ConversationListProps {
  person: Person[];
  onPersonClick: (idPerson: number) => void;
}

export const ConversationList: React.FC<ConversationListProps> = ({
  onPersonClick,
}) => {
  return (
    <ConvListStyled>
      {users.map((person) => (
        <div key={person.id} className="person__list">
          <PersonItem
            id={person.id}
            name={person.name}
            photo={person.photo}
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
`;
