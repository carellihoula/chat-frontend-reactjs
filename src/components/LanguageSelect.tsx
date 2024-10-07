import React, { useState } from "react";
import styled from "styled-components";
import { IoLanguage } from "react-icons/io5"; // Icône de langue
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Flèche haut/bas pour la liste déroulante

type LanguageSelectProps = {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const languages = ["English", "French", "Spanish", "German", "Chinese"];

const LanguageSelect: React.FC<LanguageSelectProps> = ({
  placeholder = "Select or type your language",
  value,
  onChange,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const filteredLanguages = languages.filter((lang) =>
    lang.toLowerCase().includes(value.toLowerCase())
  );

  const handleLanguageSelect = (lang: string) => {
    onChange({
      target: { value: lang },
    } as React.ChangeEvent<HTMLInputElement>);
    setDropdownOpen(false); // Fermer la liste après sélection
  };

  return (
    <InputContainer>
      <IconWrapper>
        <IoLanguage color="#FFF" />
      </IconWrapper>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setDropdownOpen(true)} // Ouvrir la liste déroulante lors du focus
      />
      <ChevronWrapper onClick={() => setDropdownOpen(!isDropdownOpen)}>
        {isDropdownOpen ? (
          <FaChevronUp color="#FFF" />
        ) : (
          <FaChevronDown color="#FFF" />
        )}
      </ChevronWrapper>
      {isDropdownOpen && filteredLanguages.length > 0 && (
        <Dropdown>
          {filteredLanguages.map((lang, index) => (
            <DropdownItem
              key={index}
              onClick={() => handleLanguageSelect(lang)}
            >
              {lang}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </InputContainer>
  );
};

export default LanguageSelect;

// Styled Components

const InputContainer = styled.div`
  position: relative;
  width: 80%;
  height: auto;
  margin-bottom: 10px;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 20px;
  color: #fff;
`;

const ChevronWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 20px;
  cursor: pointer;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 51px;
  padding: 10px 40px 10px 40px; /* Espace pour les icônes à gauche et à droite */
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;
  border-style: none;
  font-size: 16px;
  background-color: #383a40;
  color: #fff;
  font-family: "Times New Roman", Times, serif;
  &::placeholder {
    color: #6d6f78;
    font-family: "Times New Roman", Times, serif;
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  width: 100%;
  background-color: #383a40;
  border-style: none;
  border-radius: 10px;
  margin-top: 5px;
  max-height: 150px;
  overflow-y: auto;
  list-style: none;
  padding: 8px;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  color: #fff;
  &:hover {
    background-color: #4b4e54;
  }
`;
