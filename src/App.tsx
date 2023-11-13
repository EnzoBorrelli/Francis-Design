import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavMenu from "./components/NavMenu/NavMenu";
import Inicio from "./components/sections/Inicio/Inicio";
import Blog from "./components/sections/Blog/Blog";
import Catalogo from "./components/sections/Catalogo/Catalogo";
import Contacto from "./components/sections/Contacto/Contacto";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route caseSensitive path="/" element={<Inicio />} />
        <Route caseSensitive path="/Inicio" element={<Inicio />} />
        <Route caseSensitive path="/Blog" element={<Blog />} />
        <Route caseSensitive path="/Catalogo" element={<Catalogo />} />
        <Route caseSensitive path="/Contacto" element={<Contacto />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
