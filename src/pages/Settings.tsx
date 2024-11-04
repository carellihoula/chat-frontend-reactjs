import styled from "styled-components";
import { EditPassword } from "../components/EditPassword";
import { useState } from "react";
import LanguageSelect from "../components/LanguageSelect";

const Settings = () => {
  const [language, setLanguage] = useState("");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(e.target.value);
  };
  return (
    <SettingStyled>
      <h1 className="edit__password">Edit password</h1>
      <EditPassword />
      {/*<h1 className="edit__password">Languages</h1>*/}
      <LanguageSelect
        placeholder="Select your language"
        value={language}
        onChange={handleLanguageChange}
      />
    </SettingStyled>
  );
};

export default Settings;

const SettingStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  //background-color: red;
  position: relative;
  padding: 8px;
  margin-top: 50px;
  width: 100%;
  height: 100%;

  .edit__password {
    color: #fff;
    border-bottom: 2px solid #fff;
    padding-bottom: 5px;
    margin-bottom: 10px;
    width: 80%;
    color: #f2f3f5;
    font-size: 1.2rem;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
`;
