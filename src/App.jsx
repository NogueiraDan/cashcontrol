import GlobalStyle from "./styles/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Admin from "./pages/Admin";
import Private from "./config/Private";

export default function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route
              path="/admin"
              element={
                <Private>
                  <Admin />
                </Private>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
      <GlobalStyle />
    </>
  );
}
