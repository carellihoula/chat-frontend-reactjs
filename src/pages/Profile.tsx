import React, { useState } from "react";
import styled from "styled-components";
import { MdEdit } from "react-icons/md";
import { LiaSaveSolid } from "react-icons/lia";
import { Person } from "../types__interfaces/interface";

type Props = {
  connectedUser: Person;
};

const Profile: React.FC<Props> = ({ connectedUser }) => {
  const [name, setName] = useState(connectedUser.name);
  const [email, setEmail] = useState(connectedUser.email);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [profileImage, setProfileImage] = useState(connectedUser.photo);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleNameEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditingName(false);
    }
  };

  const handleEmailEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditingEmail(false);
    }
  };

  const handleSaveName = () => {
    setIsEditingName(false);
    //api to edit name
  };
  const handleSaveEmail = () => {
    setIsEditingEmail(false);
    //api to edit name
  };

  return (
    <ProfileStyled className="profile-container">
      <div className="profile-image-container">
        <label htmlFor="upload-photo">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
            style={{ cursor: "pointer" }}
          />
        </label>
        <input
          type="file"
          id="upload-photo"
          style={{ display: "none" }}
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <div className="profile-details">
        {isEditingName ? (
          <div className="input__div">
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              onBlur={() => setIsEditingName(false)}
              autoFocus
              onKeyDown={handleNameEnter}
            />
            <LiaSaveSolid
              color="#FFF"
              size={22}
              className="icon__save__or__edit"
              onClick={handleSaveName}
            />
          </div>
        ) : (
          <div className="name__div">
            <h3 style={{ cursor: "pointer" }}>{name}</h3>
            <MdEdit
              color="#FFF"
              size={22}
              onClick={() => setIsEditingName(true)}
              className="icon__save__or__edit"
            />
          </div>
        )}
        {isEditingEmail ? (
          <div className="input__div">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => setIsEditingEmail(false)}
              autoFocus
              onKeyDown={handleEmailEnter}
            />
            <LiaSaveSolid
              color="#FFF"
              size={22}
              className="icon__save__or__edit"
              onClick={handleSaveEmail}
            />
          </div>
        ) : (
          <div className="name__div">
            <p style={{ cursor: "pointer" }}>{email}</p>
            <MdEdit
              color="#FFF"
              size={22}
              onClick={() => setIsEditingEmail(true)}
              className="icon__save__or__edit"
            />
          </div>
        )}
      </div>
    </ProfileStyled>
  );
};

export default Profile;

const ProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  // background-color: red;
  .profile-image-container {
    position: relative;
    display: flex;
    align-self: center;
  }

  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
  .profile-details {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    text-align: center;
    width: 100%;
  }

  .profile-details h3,
  .profile-details p {
    margin: 10px 0;
    font-family: Arial, sans-serif;
    font-size: 1.2rem;
    color: #fff;
  }

  input[type="text"],
  input[type="email"] {
    border-style: none;
    padding: 8px;
    border-radius: 4px;
    width: 50%;
    background-color: #383a40;
    color: #fff;
    text-align: center;
  }

  input[type="text"]:focus,
  input[type="email"]:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  .name__div {
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    //background-color: red;
    width: 100%;
  }
  .input__div {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    //background-color: red;
  }
  .icon__save__or__edit {
    cursor: pointer;
    background: #3f4248;
    padding: 5px;
    box-sizing: content-box;
    border-radius: 5px;
  }
`;
