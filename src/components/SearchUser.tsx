import React, { useState } from "react";
import { searchUserByEmail, sendFriendRequest } from "../api/friendRequestsApi";
import { Person } from "../types__interfaces/interface";

const SearchUser: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [searchedUser, setSearchedUser] = useState<Person | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleSearch = async () => {
    try {
      const user = await searchUserByEmail(email);
      setSearchedUser(user);
      setMessage("");
    } catch (error: any) {
      setSearchedUser(null);
      if (error.message.includes("404")) {
        setMessage("Utilisateur non trouvé");
      } else {
        setMessage("Erreur lors de la recherche de l'utilisateur");
      }
    }
  };

  const handleSendFriendRequest = async () => {
    if (!searchedUser) return;
    try {
      await sendFriendRequest(searchedUser.id);
      setMessage("Demande d'ami envoyée");
    } catch (error: any) {
      setMessage(error.message || "Erreur lors de l'envoi de la demande");
    }
  };

  return (
    <div style={{ color: "#FFF" }}>
      <h2>Rechercher un utilisateur</h2>
      <input
        type="email"
        placeholder="Entrez l'email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ color: "black" }}
      />
      <button onClick={handleSearch}>Rechercher</button>
      {message && <p>{message}</p>}
      {searchedUser && (
        <div>
          <p>Nom d'utilisateur: {searchedUser.username}</p>
          <img src={searchedUser.avatar} alt="Avatar" />
          <button onClick={handleSendFriendRequest}>Envoyer une demande</button>
        </div>
      )}
    </div>
  );
};

export default SearchUser;
