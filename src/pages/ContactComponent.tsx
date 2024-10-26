import React, { useEffect, useState } from "react";
import PersonItem from "../components/PersonItem";
import styled from "styled-components";
import { useSelectedUser } from "../context/SelectedUserContext";
import { useUserContext } from "../context/UsersListContext";
import { useMenu } from "../context/MenuContext";

const UserList: React.FC = () => {
  //const [users, setUsers] = useState<Person[]>([]);
  const { setSelectedUser } = useSelectedUser();
  const { setSelectedMenuId } = useMenu();
  const { users, loading, error } = useUserContext();

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
      {users.map((user) => (
        <PersonItem
          key={user._id}
          id={user._id}
          name={user.username}
          photo={user.avatar}
          onClick={handleUserClick}
          status={user.status}
          isSelected={false}
        />
      ))}
    </Container>
  );
};

export default UserList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
