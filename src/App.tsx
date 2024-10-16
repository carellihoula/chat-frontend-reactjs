import "./App.css";
import { Home } from "./pages/Home";
import "./index.css";
import LoginAndRegister from "./pages/LoginAndRegister";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<LoginAndRegister />} />
    </Routes>
  );
}

export default App;
