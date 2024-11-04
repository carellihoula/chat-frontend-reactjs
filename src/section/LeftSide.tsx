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
import UserList from "../pages/ConnectedUsers";
import { useSocket } from "../context/SocketContext";
import emptyConversation from "/images/boite-vide-ouverte.png";

const LeftSide = () => {
  const { selectedMenuId } = useMenu();
  const { selectedUser, setSelectedUser } = useSelectedUser();
  const [user, setUser] = useState(null);
  const { messages, allUsers } = useSocket();
  {
    /*<RightSide selectedUserId={selectedUser?.id ?? null} />*/
  }
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const handleClick = (id: string) => {
    //alert(`Clicked person with ID: ${id}`);
    const person = allUsers.find((user) => user._id === id);
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
              {messages.length === 0 && (
                <NoConversation>
                  <img
                    src={emptyConversation}
                    alt="empty conversation"
                    width="100px"
                    height="100px"
                  />
                  <p>
                    No conversations yet. Go to Contacts or search for a user by
                    email to start chatting.
                  </p>
                  <p>
                    Create two user accounts by signing up in two different
                    browsers (or in a public and private window of the same
                    browser).
                  </p>
                </NoConversation>
              )}
              <ConversationList onPersonClick={handleClick} person={allUsers} />
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

const NoConversation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  gap: 20px;
  //background-color: red;
  overflow-y: hidden;

  p {
    color: #fff;
    font-size: 1.2rem;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    text-align: center;
    padding: 10px;
  }
`;
