import React, { createContext, useContext, useState, ReactNode } from "react";
import { Person } from "../types__interfaces/interface";

interface SelectedUserContextProps {
  selectedUser: Person | null;
  setSelectedUser: (user: Person | null) => void;
}

// Créer le contexte avec des valeurs par défaut
const SelectedUserContext = createContext<SelectedUserContextProps | undefined>(
  undefined
);

// Fournisseur du contexte
export const SelectedUserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedUser, setSelectedUser] = useState<Person | null>(null);

  return (
    <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </SelectedUserContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useSelectedUser = (): SelectedUserContextProps => {
  const context = useContext(SelectedUserContext);
  if (!context) {
    throw new Error(
      "useSelectedUser doit être utilisé dans un SelectedUserProvider"
    );
  }
  return context;
};
