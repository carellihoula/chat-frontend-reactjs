import { IconType } from "react-icons";

export interface PersonItemProps {
  id: number;
  name: string;
  photo: string;
  onClick: (id: number) => void;
  status: boolean;
}

export interface Person {
  id: number;
  name: string;
  status: boolean;
  photo: string;
  email: string;
}

export interface Message {
  id: number;
  senderId: number;
  receiverId: number;
  content: string;
  timestamp: Date;
  senderPhoto: string;
}

export interface IMenuItem {
  id: number;
  title: string;
  imgUrl?: string;
  icon?: IconType;
}
