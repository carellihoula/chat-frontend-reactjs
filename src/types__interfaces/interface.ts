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
  photo: string;
  status: boolean;
}

export interface Message {
  id: number;
  sender: string;
  receiver: string;
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
