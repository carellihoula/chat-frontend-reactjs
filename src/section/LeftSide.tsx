import styled from "styled-components";
import ConversationList from "../components/ConversationList";
import { users } from "../mock/users";
import SearchBar from "../components/SearchBar";
import CopyRightFragment from "../components/CopyRightFragment";
import Settings from "../pages/Settings";
import { useMenu } from "../context/MenuContext";
import Profile from "../pages/Profile";

const LeftSide = () => {
  const { selectedMenuId } = useMenu();
  const handleClick = (id: number) => {
    alert(`Clicked person with ID: ${id}`);
  };

  const renderContent = () => {
    switch (selectedMenuId) {
      case 1:
        return <Profile />;
      case 2:
        return (
          <>
            <ConversationList onPersonClick={handleClick} person={users} />;
          </>
        );

      case 3:
        return <Settings />;
      default:
        return null;
    }
  };
  return (
    <LeftSideStyled>
      <SearchBar />
      {renderContent()}
      <CopyRightFragment />
    </LeftSideStyled>
  );
};

export default LeftSide;

const LeftSideStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: #2b2d31;
  width: 30%;
  position: relative;
`;
