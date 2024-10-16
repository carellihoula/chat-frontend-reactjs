import React from "react";
import { PersonItemProps } from "../types__interfaces/interface";
import styled from "styled-components";

export const PersonItem: React.FC<PersonItemProps> = ({
  id,
  name,
  photo,
  onClick,
  status,
}) => {
  return (
    <PersonItemStyled onClick={() => onClick(id)}>
      <div className={`avatar ${status ? "online" : "offline"}`}>
        <div className="w-16 rounded-full">
          <img src={photo} alt={name} />
        </div>
      </div>
      <div className="name">{name}</div>
    </PersonItemStyled>
  );
};

export default PersonItem;

const PersonItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  align-self: center;
  padding: 10px;
  width: 90%;
  &:hover {
    background: #3f4248;
    border-radius: 10px;
    cursor: pointer;
  }
  .name {
    color: #f2f3f5;
    font-size: 1.2rem;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .name {
      font-size: 1rem;
    }
  }
`;
