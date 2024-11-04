import React from "react";
import styled from "styled-components";
import { Person } from "../types__interfaces/interface";
import { CiPhone } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { IoIosArrowBack, IoIosHelpCircleOutline } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

type Props = {
  person: Person;
  onReturn: () => void;
};

const ChatHeader: React.FC<Props> = ({ person, onReturn }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  return (
    <HeaderContainer>
      {isMobile && (
        <ReturnButton onClick={onReturn}>
          <IoIosArrowBack size={24} color="#FFF" />
        </ReturnButton>
      )}

      <ProfileContainer>
        <div className="avatar mr-4">
          <div className="w-12 rounded-full">
            <img src={person.avatar} alt={person.username} />
          </div>
        </div>
        <div>
          <PersonName>{person.username}</PersonName>
          <Status online={person.status}>
            {person.status ? "online" : "offline"}
          </Status>
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

const Status = styled.p<{ online: boolean }>`
  font-size: 14px;
  //color: #bfc1c5;
  margin: 0;
  color: ${(props) => (props.online ? "#4CAF50" : "#bfc1c5")};
  font-weight: bold;
`;

const OptionsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const ReturnButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;
