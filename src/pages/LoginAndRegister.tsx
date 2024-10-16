import React, { useState } from "react";
import styled from "styled-components";
import Login from "../components/Login";
import Register from "../components/Register";
import { login, register } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginAndRegister: React.FC = () => {
  const { loginLStorage } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    // Logique de connexion
    console.log("Connexion avec:", { email, password });
    // Vous pouvez ajouter des appels API ici
    setError(null);
    try {
      const data = await login({ email, password });
      loginLStorage(data.user, data.token);
      navigate("/");
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "Erreur lors de la connexion.");
    }
  };

  const handleRegister = async (
    username: string,
    email: string,
    password: string
  ) => {
    // Logique d'inscription
    console.log("register with:", { username, email });
    // Vous pouvez ajouter des appels API ici
    setError(null);
    try {
      const data = await register({ username, email, password });
      loginLStorage(data.user, data.token);
      navigate("/");
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "error during registration.");
    }
  };

  return (
    <Container>
      <Login onLogin={handleLogin} />
      <Register onRegister={handleRegister} />
    </Container>
  );
};

export default LoginAndRegister;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  height: 100vh;
  background-color: #2b2d31;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
