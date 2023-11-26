import { useState } from "react";
import "./Blog.scss";
import Entrada from "./Entrada/Entrada";
import BotonEntrada from "./BotonEntrada/BotonEntrada";

const Blog = () => {
  const [seAbrio, setSeAbrio] = useState(false);

  function AbrirLibro() {
    setSeAbrio(!seAbrio);
  }
  return (
    <body className="blog">
      <div className="blog-libreria">
        <div className="libreria-estanteria">
        <BotonEntrada Click={AbrirLibro}
          CoverColor="pink"
          BookTitle="this is a book"
        />
        <BotonEntrada
          CoverColor="orange"
          BookTitle="this is a book but better"
        />
        <BotonEntrada
          CoverColor="lightgreen"
          BookTitle="this is another book"
        />
        <BotonEntrada
          CoverColor="pink"
          BookTitle="this is not a book?"
        />
        <BotonEntrada
          CoverColor="red"
          BookTitle="el libro rojo"
        />
      </div>
      <div className={`blog-entrada ${seAbrio? "Activo": ""}`}><Entrada/></div>
      </div>
    </body>
  );
};

export default Blog;
