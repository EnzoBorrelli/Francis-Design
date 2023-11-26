import { useState } from "react";
import "./Blog.css";
import Entrada from "./Entrada/Entrada";

const Blog = () => {
  const[seAbrio,setSeAbrio]= useState(false);

  function AbrirLibro(){
    setSeAbrio(!seAbrio);
  }
  return (
    <body className="blog">
     <div className="blog-libreria">a</div>
    </body>
  );
};

export default Blog;
