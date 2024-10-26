import { IconType } from "react-icons";
import styled from "styled-components";

// Styled component for each menu item
const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  padding: 10px;
  border-radius: 5px;

  cursor: pointer;

  &:hover {
    background: #3f4248;
  }
`;

interface MenuItemProps {
  icon?: IconType;
  image?: string;
  onClick: () => void;
  isSelected: boolean; // Indicates if this menu is selected
}

const MenuItemComponent: React.FC<MenuItemProps> = ({
  icon: Icon,
  image,
  onClick,
  isSelected,
}) => {
  return (
    <MenuItem
      onClick={onClick}
      style={{ background: isSelected ? "#3f4248" : "transparent" }}
    >
      {Icon ? (
        <Icon size={36} color="#FFF" />
      ) : (
        image && <img src={image} style={{ width: 36, borderRadius: "50%" }} />
      )}
    </MenuItem>
  );
};

export default MenuItemComponent;
