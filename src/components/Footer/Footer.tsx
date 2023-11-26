import "./Footer.scss";
import { ImArrowUp } from "react-icons/im";

import { useEffect, useState } from "react";
const Footer = () => {
  const [scrollBtn, setScrollBtn] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 200) setScrollBtn(true);
    else {
      setScrollBtn(false);
    }
  };

  useEffect(() => {
    // Agregar el evento de desplazamiento cuando se monta el componente
    window.addEventListener("scroll", handleScroll);
    // Limpiar el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <h2 className="footer-h2">©francisdesign.com 2023</h2>
      <button onClick={scrollToTop} className={`footer-topscroll ${scrollBtn? "isActive" : ""}`}>
        <ImArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
