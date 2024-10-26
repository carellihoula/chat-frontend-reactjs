import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SelectedUserProvider } from "./context/SelectedUserContext.tsx";
import { MenuProvider } from "./context/MenuContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { SocketProvider } from "./context/SocketContext.tsx";
import { UserProvider } from "./context/UsersListContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SelectedUserProvider>
          <MenuProvider>
            <UserProvider>
              <SocketProvider>
                <App />
              </SocketProvider>
            </UserProvider>
          </MenuProvider>
        </SelectedUserProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
