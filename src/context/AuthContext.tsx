import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { Person } from "../types__interfaces/interface";
import { getUserIdFromToken } from "../utils/auth";

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

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedToken && storedUser) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      const extractedUserId = getUserIdFromToken(storedToken);
      console.log("tt: " + extractedUserId);
      setUserId(extractedUserId);
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
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{ user, userId, token, isAuthenticated, loginLStorage, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
