import React, { useState } from "react";
import styled from "styled-components";

type Props = {};

const languages = [
  "English",
  "Français",
  "Español",
  "Deutsch",
  "中文",
  "العربية",
];

const LanguageSelector = (props: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <LanguageStyled>
      <label htmlFor="language-select" className="language-label">
        Select a language:
      </label>
      <select
        id="language-select"
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="language-dropdown"
      >
        <option value="" disabled>
          Choose a language
        </option>
        {languages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>

      {selectedLanguage && (
        <p className="selected-language">
          You have selected: <strong>{selectedLanguage}</strong>
        </p>
      )}
    </LanguageStyled>
  );
};

export default LanguageSelector;

const LanguageStyled = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 300px;
  font-family: Arial, sans-serif;

  .language-label {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  .language-dropdown {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #333;
  }

  .language-dropdown:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  .selected-language {
    margin-top: 15px;
    font-size: 14px;
    color: #555;
  }
`;
