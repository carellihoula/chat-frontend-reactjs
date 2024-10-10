import { Message } from "../types__interfaces/interface";

export const messages: Message[] = [
  // Messages entre User 1 et User 2 (Barack Obama)
  {
    id: 1,
    senderId: 1,
    receiverId: 2,
    content: "Salut Barack, comment ça va ?",
    timestamp: new Date(),
    senderPhoto: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    senderId: 2,
    receiverId: 1,
    content: "Salut John ! Ça va bien, merci. Et toi ?",
    timestamp: new Date(),
    senderPhoto:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRlJ4ZwNR5h_VyPNDygNN7JhWkqdoiL3I-QJ6c6k-xo7PiAKo5u",
  },
  {
    id: 3,
    senderId: 1,
    receiverId: 2,
    content: "Je vais bien, merci. As-tu eu le temps de lire le rapport ?",
    timestamp: new Date(),
    senderPhoto: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 4,
    senderId: 2,
    receiverId: 1,
    content: "Oui, je l'ai lu. C'était très intéressant.",
    timestamp: new Date(),
    senderPhoto:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRlJ4ZwNR5h_VyPNDygNN7JhWkqdoiL3I-QJ6c6k-xo7PiAKo5u",
  },
  {
    id: 5,
    senderId: 1,
    receiverId: 2,
    content: "Super ! On pourrait en discuter plus en détail demain.",
    timestamp: new Date(),
    senderPhoto: "https://randomuser.me/api/portraits/men/1.jpg",
  },

  // Messages entre User 1 et User 3 (Donald Trump)
  {
    id: 6,
    senderId: 1,
    receiverId: 3,
    content: "Salut Donald, tu es disponible pour une réunion ?",
    timestamp: new Date(),
    senderPhoto: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 7,
    senderId: 3,
    receiverId: 1,
    content:
      "Salut John ! Oui, je suis disponible. Quand veux-tu la planifier ?",
    timestamp: new Date(),
    senderPhoto:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQLL0VKBxr9IkeP6S-B3zv07-_7-5haUPAUUkc4LB7B2jKO2Phuca09TPJhaJN5iZy8PGoGcXRQPaUPvAg",
  },
  {
    id: 8,
    senderId: 1,
    receiverId: 3,
    content: "Que dirais-tu de demain à 14h ?",
    timestamp: new Date(),
    senderPhoto: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 9,
    senderId: 3,
    receiverId: 1,
    content: "Ça me convient. Je bloque l'heure dans mon agenda.",
    timestamp: new Date(),
    senderPhoto:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQLL0VKBxr9IkeP6S-B3zv07-_7-5haUPAUUkc4LB7B2jKO2Phuca09TPJhaJN5iZy8PGoGcXRQPaUPvAg",
  },
  {
    id: 10,
    senderId: 1,
    receiverId: 3,
    content: "Parfait ! À demain, alors.",
    timestamp: new Date(),
    senderPhoto: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];
