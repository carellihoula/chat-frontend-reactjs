import { io, Socket } from "socket.io-client";

// URL de votre serveur backend
const SOCKET_URL = "http://localhost:3000";

// Récupérer le token JWT
const token = localStorage.getItem("token");

const socket: Socket = io(SOCKET_URL, {
  auth: {
    token: token, // Envoyer le token pour l'authentification
  },
  transports: ["websocket"], // Utiliser WebSocket
});

export default socket;
