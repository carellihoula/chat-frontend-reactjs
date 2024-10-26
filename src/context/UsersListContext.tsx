import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Person } from "../types__interfaces/interface";
import { getAuthHeaders } from "../utils/getAuthHeaders";

// Définir les types des props du composant Provider, incluant `children`
interface UserProviderProps {
  children: ReactNode;
}

// Définition du type de données pour le contexte utilisateur
interface UserContextProps {
  users: Person[];
  loading: boolean;
  error: string | null;
  refreshUsers: () => void;
}

// Création du contexte
const UserContext = createContext<UserContextProps | undefined>(undefined);

// Hook personnalisé pour accéder au contexte utilisateur
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

// Composant Provider pour UserContext
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour récupérer la liste des utilisateurs depuis l'API
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "GET",
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setUsers(data); // Mettre à jour les utilisateurs dans l'état
    } catch (error) {
      setError("Erreur lors de la récupération des utilisateurs");
      console.error("Erreur lors de la récupération des utilisateurs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Charger les utilisateurs à la première montée du composant
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{ users, loading, error, refreshUsers: fetchUsers }}
    >
      {children}
    </UserContext.Provider>
  );
};
