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
  icon?: JSX.Element;
  img?: string;
  onClick: () => void;
  isSelected: boolean; // Indicates if this menu is selected
}

const MenuItemComponent: React.FC<MenuItemProps> = ({
  icon,
  onClick,
  isSelected,
}) => {
  return (
    <MenuItem
      onClick={onClick}
      style={{ background: isSelected ? "#3f4248" : "transparent" }}
    >
      {icon}
    </MenuItem>
  );
};

export default MenuItemComponent;
