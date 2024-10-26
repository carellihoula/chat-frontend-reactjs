import styled from "styled-components";
import ConversationList from "../components/ConversationList";
import SearchBar from "../components/SearchBar";
import CopyRightFragment from "../components/CopyRightFragment";
import Settings from "../pages/Settings";
import { useMenu } from "../context/MenuContext";
import Profile from "../pages/Profile";
import { useSelectedUser } from "../context/SelectedUserContext";
import { useMediaQuery } from "react-responsive";
import RightSide from "./RightSide";
import { useEffect, useState } from "react";
//import SearchUser from "../components/SearchUser";
import UserList from "../pages/ContactComponent";
import { useUserContext } from "../context/UsersListContext";

const LeftSide = () => {
  const { selectedMenuId } = useMenu();
  const { selectedUser, setSelectedUser } = useSelectedUser();
  const [user, setUser] = useState(null);
  const { users } = useUserContext();
  {
    /*<RightSide selectedUserId={selectedUser?.id ?? null} />*/
  }
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const handleClick = (id: string) => {
    //alert(`Clicked person with ID: ${id}`);
    const person = users.find((user) => user._id === id);
    if (person) {
      setSelectedUser(person);
    }
  };
  const handleReturn = () => {
    setSelectedUser(null);
  };
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser); // Mettez à jour l'état avec les données de l'utilisateur
    }
  }, []);
  const renderContent = () => {
    switch (selectedMenuId) {
      case 1:
        return user && <Profile connectedUser={user} />;
      case 2:
        if (selectedUser && isMobile) {
          return (
            <RightSide
              selectedUserId={selectedUser._id}
              onReturn={handleReturn}
            />
          );
        } else {
          return (
            <>
              <SearchBarWrapper isMobile={isMobile}>
                <SearchBar />
              </SearchBarWrapper>
              <ConversationList onPersonClick={handleClick} person={users} />
            </>
          );
        }

      case 3:
        return (
          <>
            <SearchBarWrapper isMobile={isMobile}>
              <SearchBar />
            </SearchBarWrapper>
            {/*<SearchUser />*/}
            <UserList />
          </>
        );
      case 4:
        return <Settings />;
      default:
        return null;
    }
  };
  return (
    <LeftSideStyled isMobile={isMobile}>
      {renderContent()}

      <CopyRightFragment />
    </LeftSideStyled>
  );
};

export default LeftSide;

const LeftSideStyled = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  background: #2b2d31;
  width: 30%;
  position: relative;

  @media (max-width: 480px) {
    display: ${(props) =>
      props.isMobile ? "block" : "none"}; /* Visible on mobile */
    height: 100vh; /* Adjust height for mobile view */
    width: 100%;
    overflow-y: auto; /* Ensure scrolling if content overflows */
  }
`;
const SearchBarWrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.isMobile ? "20px 0" : "10px 0")};
  width: 100%;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;
