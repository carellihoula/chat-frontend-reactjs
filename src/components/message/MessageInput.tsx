import React, {  FC, useState } from 'react'
import { LuPlusCircle } from "react-icons/lu";
import { BiSolidSend } from "react-icons/bi";
import styled from 'styled-components';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput:FC<MessageInputProps> = ({onSendMessage}) => {
  const [message, setMessage] = useState<string>('')

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if(message.trim()){
      onSendMessage(message)
      setMessage("")
    }
  }

  const handleKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key = "Enter"){
      handleSendMessage()
    }
  }

  return (
    <MessageInputStyled>
        <LuPlusCircle color={"#6D6F78"} size={24}/>
        <input 
        type='text'
        value={message}
        onChange={handleInputChange}
        placeholder='type your message'
        onKeyPress={handleKeyPress}
        className='message__input'
        />
        <BiSolidSend onClick={handleSendMessage} color={"#32c714"} size={24}/>
    </MessageInputStyled>
  )
}

export default MessageInput

const MessageInputStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  border-style: none;
  border-radius: 10px;
  background: #383A40;
  bottom: 0;
  margin-bottom: 30px;
  width: 90%;
  height: 54px;
  .message__input{
    width: 90%;
    height: 95%;
    background: #383A40;
    outline: none;
    border-style: none;
    color: white;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .message__input::placeholder{
    color:#6D6F78;
    font-size: 17px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

 
`