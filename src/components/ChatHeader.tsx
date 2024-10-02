import React from "react";
import styled from "styled-components";
import { Person } from "../types__interfaces/interface";
import { IoIosHelpCircle } from "react-icons/io";
import { CiPhone } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";

type Props = {
  person: Person; // La personne avec laquelle vous discutez
};

const ChatHeader: React.FC<Props> = ({ person }) => {
  return (
    <HeaderContainer>
      <ProfileContainer>
        <div className="avatar mr-4">
          <div className="w-12 rounded-full">
            <img src={person.photo} alt={person.name} />
          </div>
        </div>
        <div>
          <PersonName>{person.name}</PersonName>
          <Status>{person.status ? "Online" : "Offline"}</Status>
        </div>
      </ProfileContainer>
      <OptionsContainer>
        <CiPhone size={26} color={"#FFF"} />
        <CiVideoOn size={26} color={"#FFF"} />
        <IoIosHelpCircleOutline size={26} color={"#FFF"} />
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default ChatHeader;

// Styled Components

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #3f4147;
  width: 100%;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PersonName = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  margin: 0;
`;

const Status = styled.p`
  font-size: 14px;
  color: #bfc1c5;
  margin: 0;
`;

const OptionsContainer = styled.div`
  display: flex;
  gap: 15px;
`;
