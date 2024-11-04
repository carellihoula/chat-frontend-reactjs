import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { Person } from "../types__interfaces/interface";
import { getUserIdFromToken } from "../utils/auth";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: Person | null;
  userId: string | null;
  token: string | null;
  isAuthenticated: boolean;
  loginLStorage: (user: Person, token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  userId: null,
  token: null,
  isAuthenticated: false,
  loginLStorage: () => {},
  logout: () => {},
});

// Fonction pour vérifier si le token est valide
const isTokenValid = (): boolean => {
  const token = localStorage.getItem("token");
  if (!token) return false;
  try {
    const decoded: { exp: number } = jwtDecode(token);
    return decoded.exp * 1000 > Date.now(); // Comparer la date d'expiration avec l'heure actuelle
  } catch (error) {
    return false;
  }
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<Person | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedToken && storedUser) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      const extractedUserId = getUserIdFromToken(storedToken);
      console.log("tt: " + extractedUserId);
      setUserId(extractedUserId);
    } else {
      logout(); // Déconnecter si le token est expiré
    }
  }, []);

  const loginLStorage = (userData: Person, authToken: string) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", authToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/auth");
  };

  //const isAuthenticated = !!token;
  useEffect(() => {
    if (token && !isTokenValid()) {
      logout(); // Déconnecter si le token est expiré
    }
  }, [token]);
  return (
    <AuthContext.Provider
      value={{
        user,
        userId,
        token,
        isAuthenticated: isTokenValid(),
        loginLStorage,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
