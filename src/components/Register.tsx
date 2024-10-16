import React, { useState } from "react";
import styled from "styled-components";

interface RegisterProps {
  onRegister: (name: string, email: string, password: string) => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(username, email, password);
  };

  return (
    <FormContainer>
      <Title>Inscription</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="register-name">Nom :</Label>
          <Input
            type="text"
            id="register-name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Entrez votre nom"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="register-email">Email :</Label>
          <Input
            type="email"
            id="register-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Entrez votre email"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="register-password">Mot de passe :</Label>
          <Input
            type="password"
            id="register-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Entrez votre mot de passe"
          />
        </FormGroup>
        <Button type="submit">S'inscrire</Button>
      </form>
    </FormContainer>
  );
};

export default Register;

// Réutilisation des mêmes styles que pour Login
const FormContainer = styled.div`
  flex: 1;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  box-sizing: border-box;
  border: 1px solid #aaa;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px 0;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #218838;
  }
`;
