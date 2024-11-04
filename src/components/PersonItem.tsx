import React from "react";
import { PersonItemProps } from "../types__interfaces/interface";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { toCapitalize } from "../utils/Capitalize";

interface PersonItemPropsExtended extends PersonItemProps {
  isSelected: boolean;
}

export const PersonItem: React.FC<PersonItemPropsExtended> = ({
  id,
  name,
  photo,
  onClick,
  status,
  isSelected,
}) => {
  return (
    <PersonItemStyled onClick={() => onClick(id)} isSelected={isSelected}>
      <div className={`avatar ${status ? "online" : "offline"}`}>
        <div className="w-16 rounded-full">
          <img src={photo} alt={name} />
        </div>
      </div>
      <div className="name">{toCapitalize(name)}</div>

      <AiOutlineDelete color="#FFF" size={24} className="delete" />
    </PersonItemStyled>
  );
};

export default PersonItem;

const PersonItemStyled = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  align-self: center;
  padding: 10px;
  position: relative;
  width: 90%;
  background: ${(props) =>
    props.isSelected
      ? "#4b4e55"
      : "transparent"}; /* Background for selected item */
  border-radius: ${(props) =>
    props.isSelected ? "10px" : "0"}; /* Rounded corners if selected */

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

  /* Hide the delete icon by default */
  .delete {
    position: absolute;
    right: 20px; /* Adjust as necessary */
    bottom: 30px; /* Adjust as necessary */

    display: ${(props) => (props.isSelected ? "flex" : "none")};
  }

  /* Show the delete icon when the parent is hovered */
  &:hover .delete {
    display: flex;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    .name {
      font-size: 1rem;
    }
  }
`;
