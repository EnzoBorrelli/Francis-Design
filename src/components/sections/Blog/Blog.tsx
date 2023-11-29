import { useState } from "react";
import "./Blog.scss";
import Entrada from "./Entrada/Entrada";
import BotonEntrada from "./BotonEntrada/BotonEntrada";
import dataEntradas from "./entrandas";

const defaltdata = {
  id: 1,
  CoverColor: "pink", //color de la tapa
  BookTitle: "this is a title", //titulo del libro

  page1bg: "", // foto de fondo pag1(back de la portada)
  page1content: "back1", // texto de pag1

  page2bgF: "", //bgF = background Front
  page2contentF: "front2",
  page2bgB: "", //b = Back
  page2contentB: "back2",

  page3bgF: "", //bgF = background Front
  page3contentF: "front3",
  page3bgB: "", //b = Back
  page3contentB: "back3",

  page4bgF: "", //bgF = background Front
  page4contentF: "front4",
  page4bgB: "", //b = Back
  page4contentB: "back4",

  page5bg: "", //frente de la contratapa
  page5content: "front5",
};

const Blog = () => {
  const [seAbrio, setSeAbrio] = useState(false);
  const [data, setData] = useState(defaltdata);

  async function AbrirLibro(content: any) {
    setSeAbrio(false);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setData(content);
    setSeAbrio(true);
  }
  return (
    <body className="blog">
      <div className="blog-libreria">
        <div className="libreria-estanteria">
          {dataEntradas.entradas.map((entrada: any) => (
            <BotonEntrada key={entrada.id}
              Click={() => AbrirLibro(entrada)}
              CoverColor={entrada.CoverColor}
              BookTitle={entrada.BookTitle}
            />
          ))}
        </div>
        <div className={`blog-entrada ${seAbrio ? "Activo" : ""}`}>
          <Entrada Content={data} />
        </div>
      </div>
    </body>
  );
};

export default Blog;
