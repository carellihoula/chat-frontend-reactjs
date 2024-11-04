import React, { FC, useState } from "react";
import { LuPlusCircle } from "react-icons/lu";
import { BiSolidSend } from "react-icons/bi";
import styled from "styled-components";
import { TextareaAutosize } from "@mui/material";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <MessageInputStyled>
      <LuPlusCircle color={"#6D6F78"} size={24} style={{ display: "none" }} />
      <TextareaAutosize
        minRows={1}
        maxRows={8}
        value={message}
        onChange={handleInputChange}
        placeholder="type your message"
        onKeyDown={handleKeyDown}
        className="message__input"
      />
      <BiSolidSend onClick={handleSendMessage} color={"#32c714"} size={24} />
    </MessageInputStyled>
  );
};

export default MessageInput;

const MessageInputStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  border-style: none;
  border-radius: 10px;
  background: #383a40;
  bottom: 0;
  margin-bottom: 30px;
  width: 90%;
  height: auto;
  min-height: 54px;
  padding: 0 10px;
  .message__input {
    width: 90%;
    height: 95%;
    background: #383a40;
    outline: none;
    border-style: none;
    color: white;
    font-family: "Times New Roman", Times, serif;
    font-size: 18px;
    resize: none;
  }
  .message__input::placeholder {
    color: #6d6f78;
    font-size: 17px;
    font-family: "Times New Roman", Times, serif;
  }

  @media (max-width: 900px) {
    margin-bottom: 100px;
  }
`;
