import React, { useState } from "react";

import { CiLock } from "react-icons/ci";
import TextInputField from "./TextInputFieldt";
import styled from "styled-components";

type Props = {};

export const EditPassword = (props: Props) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCurrentPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <Container>
      <TextInputField
        icon={CiLock}
        placeholder="Enter your current password"
        value={currentPassword}
        onChange={handleCurrentPasswordChange}
      />
      <TextInputField
        icon={CiLock}
        placeholder="Enter your new password"
        value={newPassword}
        onChange={handleNewPasswordChange}
      />
      <TextInputField
        icon={CiLock}
        placeholder="Confirm your new password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  //background-color: yellow;
  width: 100%;
`;
