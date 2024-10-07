import React, { createContext, useState, useContext } from "react";

// Types
interface MenuContextType {
  selectedMenuId: number;
  setSelectedMenuId: (id: number) => void;
}

// Créer un contexte avec une valeur par défaut
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// Hook personnalisé pour accéder au contexte
export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

// MenuProvider pour encapsuler les composants enfants
export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedMenuId, setSelectedMenuId] = useState<number>(2); // ID par défaut

  return (
    <MenuContext.Provider value={{ selectedMenuId, setSelectedMenuId }}>
      {children}
    </MenuContext.Provider>
  );
};
