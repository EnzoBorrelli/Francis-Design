import { useEffect, useState } from "react";
import hanary from "../../../../assets/images/hanary.jpg";
import "./Entrada.css";

const Entrada = () => {
  const [count, setCount] = useState(0);
  const [isClosed, setClosed] = useState("Open");
  const maxPages = 3;
  useEffect(() => {
    if (count >= maxPages) {
      setCount(maxPages);
      setClosed("Closed");
    } else {
      setClosed("Open");
    }
  }, [count, maxPages]);
  function UpCount() {
    setCount(count + 1);
  }
  function downCount() {
    setCount(count - 1);
  }
  return (
    <div className="Entrada">
      <button
        className={`prevBtn ${count >= 1 ? isClosed : ""}`}
        onClick={UpCount}
      >
        {count}
      </button>

      <div id="book" className={`book ${count >= 1 ? isClosed : ""}`}>
        <div id="p1" className={`${"paper"} ${count >= 1 ? "flipped" : ""}`}>
          <div className="front">
            <div id="f1" className="front-content book-cover">
              <h2 className="Cover-text">
                This a title to use in the title of this book's title
              </h2>
            </div>
          </div>
          <div className="back">
            <div
              id="b1"
              style={{ backgroundImage: `url(${hanary})` }}
              className="back-content page-img"
            >
              <h2 className="page-text">hola</h2>
            </div>
          </div>
        </div>

        <div id="p2" className={`${"paper"} ${count >= 2 ? "flipped" : ""}`}>
          <div className="front">
            <div id="f2" className="front-content">
              <h2 className="page-text">
                A blog is a website or page that is a part of a larger website.
                Typically, it features articles written in a conversational
                style with accompanying pictures or videos. Blogging has gained
                immense popularity due to its enjoyable and adaptable nature,
                allowing for self-expression and social connections. In
                addition, it serves as a platform for enhancing writing skills
                and promoting businesses.
              </h2>
            </div>
          </div>
          <div className="back">
            <div id="b2" className="back-content">
              <h2>Back 2</h2>
            </div>
          </div>
        </div>

        <div id="p3" className={`${"paper"} ${count >= 3 ? "flipped" : ""}`}>
          <div className="front">
            <div id="f3" className="front-content">
              <h2>Front 3</h2>
            </div>
          </div>
          <div className="back">
            <div id="b3" className="back-content book-cover">
              <h2>Back 3</h2>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={downCount}
        className={`nextBtn ${count >= 1 ? isClosed : ""}`}
      >
        a
      </button>
    </div>
  );
};

export default Entrada;
