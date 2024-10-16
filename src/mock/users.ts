import { Person } from "../types__interfaces/interface";

export const users: Person[] = [
  {
    id: "6709ba9f2e2bb797d6ba67a3",
    username: "Luco Ntsoumou", // Utilisateur connecté
    status: true,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "luco@example.com",
  },
  {
    id: "670470c3930ee0393467d6ff",
    username: "Barack Obama",
    status: false,
    avatar:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRlJ4ZwNR5h_VyPNDygNN7JhWkqdoiL3I-QJ6c6k-xo7PiAKo5u",
    email: "barack.obama@example.com",
  },
  {
    id: "67046f3a908b17eda816562f",
    username: "Donald Trump",
    status: true,
    avatar:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQLL0VKBxr9IkeP6S-B3zv07-_7-5haUPAUUkc4LB7B2jKO2Phuca09TPJhaJN5iZy8PGoGcXRQPaUPvAg",
    email: "donald.trump@example.com",
  },
];
