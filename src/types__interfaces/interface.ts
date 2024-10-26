import { IconType } from "react-icons";

export interface PersonItemProps {
  id: string;
  name: string;
  photo: string;
  onClick: (id: string) => void;
  status: boolean;
}

export interface Person {
  _id: string;
  username: string;
  email: string;
  avatar: string;
  status: boolean;
  friends?: string[]; // IDs des amis
  friendRequests?: string[];
}

export interface FriendRequest {
  id: string;
  requester: Person | string;
  recipient: Person | string;
  status: "pending" | "accepted" | "rejected";
  createdAt: string;
  updatedAt: string;
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
