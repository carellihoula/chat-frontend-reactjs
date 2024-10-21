import React, { useState } from "react";

import { CiLock } from "react-icons/ci";
import TextInputField from "./TextInputFieldt";
import styled from "styled-components";

const MIN_PASSWORD_LENGTH = 6;

export const EditPassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorM, setErrorM] = useState("");
  const disabled =
    newPassword.length < MIN_PASSWORD_LENGTH || newPassword !== confirmPassword;

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

  const handleSubmit = async () => {
    if (newPassword.length < MIN_PASSWORD_LENGTH) {
      setErrorM(
        `Password must be at least ${MIN_PASSWORD_LENGTH} characters long.`
      );
      return;
    }
    if (newPassword !== confirmPassword) {
      //alert("New password and confirmation do not match.");
      setErrorM("New password and confirmation do not match.");
      return;
    }
    // Reset error if validation passes
    setErrorM("");
    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/change-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            oldPassword: currentPassword,
            newPassword: newPassword,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        //alert(data.message);
        setSuccessMessage(data.message);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        //alert(data.message || "An error occurred.");
        setErrorM(data.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Error changing password:", error);
      alert("An error occurred while changing the password.");
    }
  };

  return (
    <Container disabled={disabled}>
      <TextInputField
        icon={CiLock}
        placeholder="Enter your current password"
        value={currentPassword}
        onChange={handleCurrentPasswordChange}
        type="password"
      />
      <TextInputField
        icon={CiLock}
        placeholder="Enter your new password"
        value={newPassword}
        onChange={handleNewPasswordChange}
        type="password"
      />
      <TextInputField
        icon={CiLock}
        placeholder="Confirm your new password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        type="password"
      />
      <button
        className="save__button"
        onClick={handleSubmit}
        disabled={
          newPassword.length < MIN_PASSWORD_LENGTH ||
          newPassword !== confirmPassword
        }
      >
        Save
      </button>
      <p className="notification">{successMessage}</p>
      <p className="error__message">{errorM}</p>
    </Container>
  );
};

const Container = styled.div<{ disabled: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  //background-color: yellow;
  width: 100%;
  .save__button {
    background-color: green;
    border-radius: 8px;
    margin-top: 20px;
    text-align: center;
    padding: 10px;
    width: 80%;
    color: #fff;
    font-weight: bold;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    z-index: 2;
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#5865f2")};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
  .save__button:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#3c4bf1")};
  }
  .notification {
    color: green;
    font-size: 1rem;
    margin-top: 10px;
  }
  .error__message {
    color: red;
    font-size: 1rem;
    margin-top: 10px;
  }
`;
