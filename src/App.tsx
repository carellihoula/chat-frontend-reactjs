import "./App.css";
import { Home } from "./pages/Home";
import "./index.css";
import { SelectedUserProvider } from "./context/SelectedUserContext";
import { MenuProvider } from "./context/MenuContext";

function App() {
  return (
    <SelectedUserProvider>
      <MenuProvider>
        <div className="App">
          <Home />
        </div>
      </MenuProvider>
    </SelectedUserProvider>
  );
}

export default App;
