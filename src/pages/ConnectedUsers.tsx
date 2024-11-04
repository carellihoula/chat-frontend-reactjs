import React from "react";
import PersonItem from "../components/PersonItem";
import styled from "styled-components";
import { useSelectedUser } from "../context/SelectedUserContext";
import { useUserContext } from "../context/UsersListContext";
import { useMenu } from "../context/MenuContext";
import { useSocket } from "../context/SocketContext";

const UserList: React.FC = () => {
  //const [users, setUsers] = useState<Person[]>([]);
  const { setSelectedUser } = useSelectedUser();
  const { setSelectedMenuId } = useMenu();
  const { loading, error } = useUserContext();
  const { users } = useSocket();

  if (loading) {
    return <LoadingMessage>Chargement des utilisateurs...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  const handleUserClick = (id: string) => {
    const user = users.find((user) => user._id === id);
    console.log("Utilisateur uu:", user);
    if (user) {
      setSelectedUser(user);
      setSelectedMenuId(2);
    }
  };

  return (
    <Container>
      <h1 className="title">Connected Users</h1>
      {users.length > 0 ? (
        users.map((user) => (
          <PersonItem
            key={user._id}
            id={user._id}
            name={user.username}
            photo={user.avatar}
            onClick={handleUserClick}
            status={user.status}
            isSelected={false}
          />
        ))
      ) : (
        <h1 className="title" style={{ marginTop: "20px" }}>
          No user is connected
        </h1>
      )}
    </Container>
  );
};

export default UserList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    color: #fff;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 1.2rem;
  }
`;
const LoadingMessage = styled.div`
  font-size: 1.2rem;
  color: #666;
  margin-top: 20px;
`;

const ErrorMessage = styled.div`
  font-size: 1.2rem;
  color: red;
  margin-top: 20px;
`;
