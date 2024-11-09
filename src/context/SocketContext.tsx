import React, { createContext, useContext, useEffect, useState } from "react";
import socket from "../socket";
import { Message } from "../types__interfaces/interface";

import { getUserIdFromToken } from "../utils/auth";
//import { getAuthHeaders } from "../utils/getAuthHeaders";

interface SocketContextProps {
  messages: Message[];
  sendMessage: (content: string, recipientId: string, senderId: string) => void;
  setRecipientId: (id: string) => void;
  users: any[];
  allUsers: any[];
}

const SocketContext = createContext<SocketContextProps | undefined>(undefined);

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket doit être utilisé dans un SocketProvider");
  }
  return context;
};

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [recipientId, setRecipientId] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [users, setUsers] = useState<any[]>([]);
  const [allUsers, setAllUsers] = useState<any[]>([]);

  // Obtenir l'ID de l'utilisateur connecté à partir du token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userIdFromToken = getUserIdFromToken(token);
      if (userIdFromToken) {
        setUserId(userIdFromToken);
        socket.auth = { token }; // Ajouter le token d'authentification pour socket.io
        socket.connect(); // Se connecter au serveur socket.io
      }
    }
  }, []);

  /*useEffect(() => {
    if (!userId) return;
    if (!recipientId) return;

    // Récupérer l'historique des messages
    const fetchMessages = async () => {
      try {
        const response = await axios.get<Message[]>(
          `http://localhost:3000/api/messages/${recipientId}`,
          {
            headers: getAuthHeaders(),
          }
        );
        setMessages(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des messages:", error);
      }
    };

    fetchMessages();
  }, [recipientId]); */

  useEffect(() => {
    
    // Écouter l'historique des messages
    socket.on("messageHistory", (messageHistory: Message[]) => {
      setMessages(messageHistory);
      console.log("history: " + messages);
    });
    // Écouter les messages entrants
    socket.on("receiveMessage", (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Confirmation de l'envoi au sender
    socket.on("messageSent", (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Gérer les erreurs
    socket.on("errorMessage", (error: { error: string }) => {
      console.error("Erreur Socket.IO:", error.error);
    });

    // Écouter la liste des utilisateurs connectés
    socket.on("userList", ({ allUsers, connectedUsers }) => {
       setUsers(connectedUsers);
       setAllUsers(allUsers);
    });

    // Nettoyer les écouteurs lors du démontage
    return () => {
      socket.off("messageHistory");
      socket.off("receiveMessage");
      socket.off("messageSent");
      socket.off("errorMessage");
      socket.off("userList");
    };
  }, []);

  const sendMessage = (
    content: string,
    recipientId: string,
    senderId: string
  ) => {
    socket.emit("sendMessage", {
      recipientId: recipientId,
      content,
      senderId: senderId,
    });
  };

  return (
    <SocketContext.Provider
      value={{ messages, sendMessage, users, allUsers, setRecipientId }}
    >
      {children}
    </SocketContext.Provider>
  );
};
