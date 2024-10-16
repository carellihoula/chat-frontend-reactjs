import { Message } from "../types__interfaces/interface";

export const messages: Message[] = [
  // Messages entre User 1 et User 2 (Barack Obama)
  {
    id: "1",
    senderId: "1",
    recipientId: "2",
    content: "Salut Barack, comment ça va ?",
    timestamp: new Date(),
  },
  {
    id: "2",
    senderId: "2",
    recipientId: "1",
    content: "Salut John ! Ça va bien, merci. Et toi ?",
    timestamp: new Date(),
  },
  {
    id: "3",
    senderId: "1",
    recipientId: "2",
    content: "Je vais bien, merci. As-tu eu le temps de lire le rapport ?",
    timestamp: new Date(),
  },
  {
    id: "4",
    senderId: "2",
    recipientId: "1",
    content: "Oui, je l'ai lu. C'était très intéressant.",
    timestamp: new Date(),
  },
  {
    id: "5",
    senderId: "1",
    recipientId: "2",
    content: "Super ! On pourrait en discuter plus en détail demain.",
    timestamp: new Date(),
  },

  // Messages entre User 1 et User 3 (Donald Trump)
  {
    id: "6",
    senderId: "1",
    recipientId: "3",
    content: "Salut Donald, tu es disponible pour une réunion ?",
    timestamp: new Date(),
  },
  {
    id: "7",
    senderId: "3",
    recipientId: "1",
    content:
      "Salut John ! Oui, je suis disponible. Quand veux-tu la planifier ?",
    timestamp: new Date(),
  },
  {
    id: "8",
    senderId: "1",
    recipientId: "3",
    content: "Que dirais-tu de demain à 14h ?",
    timestamp: new Date(),
  },
  {
    id: "9",
    senderId: "3",
    recipientId: "1",
    content: "Ça me convient. Je bloque l'heure dans mon agenda.",
    timestamp: new Date(),
  },
  {
    id: "10",
    senderId: "1",
    recipientId: "3",
    content: "Parfait ! À demain, alors.",
    timestamp: new Date(),
  },
];
