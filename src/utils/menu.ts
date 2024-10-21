import { CiSettings } from "react-icons/ci";
import { IMenuItem } from "../types__interfaces/interface";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoChatbubblesOutline } from "react-icons/io5";

export const menuItems: IMenuItem[] = [
  {
    id: 1,
    title: "Profil",
    imgUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  { id: 2, title: "Chat", icon: IoChatbubblesOutline },
  { id: 3, title: "Contact", icon: LiaUserFriendsSolid },
  { id: 4, title: "Settings", icon: CiSettings },
];
