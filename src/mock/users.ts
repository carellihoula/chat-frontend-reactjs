import { Person } from "../types__interfaces/interface";

export const users: Person[] = [
  {
    id: "670f1343dfe47bf2b1ef1483",
    username: "Luco Ntsoumou", // Utilisateur connecté
    status: true,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "luco@example.com",
  },
  {
    id: "670f183032b03aa5e0349381",
    username: "Barack Obama",
    status: false,
    avatar:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRlJ4ZwNR5h_VyPNDygNN7JhWkqdoiL3I-QJ6c6k-xo7PiAKo5u",
    email: "barack.obama@example.com",
  },
  {
    id: "670f184b32b03aa5e0349384",
    username: "Donald Trump",
    status: true,
    avatar:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQLL0VKBxr9IkeP6S-B3zv07-_7-5haUPAUUkc4LB7B2jKO2Phuca09TPJhaJN5iZy8PGoGcXRQPaUPvAg",
    email: "donald.trump@example.com",
  },
];
