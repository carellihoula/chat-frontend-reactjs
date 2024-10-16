import { IconType } from "react-icons";

export interface PersonItemProps {
  id: string;
  name: string;
  photo: string;
  onClick: (id: string) => void;
  status: boolean;
}

export interface Person {
  id: string;
  username: string;
  status: boolean;
  avatar: string;
  email: string;
}

export interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  content: string;
  timestamp: Date;
}

export interface IMenuItem {
  id: number;
  title: string;
  imgUrl?: string;
  icon?: IconType;
}
