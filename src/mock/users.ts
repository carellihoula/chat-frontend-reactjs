import { Person } from "../types__interfaces/interface";

export const users: Person[] = [
  {
    id: 1,
    name: "John Doe", // Utilisateur connecté
    status: true,
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Barack Obama",
    status: false,
    photo:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRlJ4ZwNR5h_VyPNDygNN7JhWkqdoiL3I-QJ6c6k-xo7PiAKo5u",
    email: "barack.obama@example.com",
  },
  {
    id: 3,
    name: "Donald Trump",
    status: true,
    photo:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQLL0VKBxr9IkeP6S-B3zv07-_7-5haUPAUUkc4LB7B2jKO2Phuca09TPJhaJN5iZy8PGoGcXRQPaUPvAg",
    email: "donald.trump@example.com",
  },
];
