import React from "react";
import styled from "styled-components";
import { IconType } from "react-icons";

type TextInputWithIconProps = {
  icon: IconType; // Type pour l'icône, venant de react-icons
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInputField: React.FC<TextInputWithIconProps> = ({
  icon: Icon,
  placeholder = "Enter text...",
  value,
  onChange,
}) => {
  return (
    <InputContainer>
      <IconWrapper>
        <Icon color="#6D6F78" />
      </IconWrapper>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default TextInputField;

// Styled Components
const InputContainer = styled.div`
  position: relative;
  width: 80%;
  height: auto;
  margin-bottom: 10px;
  color: #fff;
  border-style: none;
  //background-color: red;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #666;
  font-size: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 51px;
  padding: 10px 10px 10px 40px; /* Espace pour l'icône à gauche */
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;
  border-style: none;
  font-size: 16px;
  background-color: #383a40;
  font-family: "Times New Roman", Times, serif;
  &::placeholder {
    color: #6d6f78;
    font-family: "Times New Roman", Times, serif;
  }
`;
