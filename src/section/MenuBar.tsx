import styled from "styled-components";
import { menuItems } from "../utils/menu";
import MenuList from "../components/menu/MenuList";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const MenuBar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/auth");
    logout();
  };
  return (
    <MenuStyled>
      <MenuList items={menuItems} />
      <CiLogout className="logout__button" size={35} onClick={handleLogout} />
    </MenuStyled>
  );
};

export default MenuBar;

const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #1e1f22;
  width: 5%;
  color: white;

  .logout__button {
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: content-box;
    margin-bottom: 50px;
  }
  .logout__button:hover {
    background: #e21b1b;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
