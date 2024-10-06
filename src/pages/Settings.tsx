import styled from "styled-components";
import { EditPassword } from "../components/EditPassword";
import LanguageSelector from "../components/LanguageSelector";

type Props = {};

const Settings = (props: Props) => {
  return (
    <SettingStyled>
      <h1 className="edit__password">Edit password</h1>
      <EditPassword />
      <h1 className="edit__password">Languages</h1>
      <LanguageSelector />
      <button className="save__button">Save</button>
    </SettingStyled>
  );
};

export default Settings;

const SettingStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //background-color: red;
  padding: 8px;
  width: 100%;

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
  .save__button {
    background-color: green;
    border-radius: 10px;
    text-align: center;
    padding: 10px;
    width: 80%;
    color: #fff;
    font-weight: bold;
  }
  .save__button:hover {
    background-color: #2dc14e;
  }
`;
