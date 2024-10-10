import { IoMdContacts } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IMenuItem } from "../types__interfaces/interface";

export const menuItems: IMenuItem[] = [
  {
    id: 1,
    title: "Profil",
    imgUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  { id: 2, title: "Contact", icon: IoMdContacts },
  { id: 3, title: "Settings", icon: CiSettings },
];
