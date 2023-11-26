import { useEffect, useState } from "react";
import hanary from "../../../../assets/images/hanary.jpg";
import { RiArrowLeftSFill } from "react-icons/ri";
import { RiArrowRightSFill } from "react-icons/ri";
import "./Entrada.scss";

const Entrada = () => {
  const [count, setCount] = useState(0);
  const [preCount, setPreCount] = useState(0);
  const [isClosed, setClosed] = useState("Open");
  const maxPages = 3;

  const [indexPage1, setIndexPage1] = useState<number>(500);
  const [indexPage2, setIndexPage2] = useState<number>(400);
  const [indexPage3, setIndexPage3] = useState<number>(300);
  const [indexPage4, setIndexPage4] = useState<number>(200);
  const [indexPage5, setIndexPage5] = useState<number>(100);

  //z indez baja y sube
  function IndexAssignUp() {
    switch (count) {
      case 1:
        setIndexPage1(100);
        console.log(indexPage1);
        break;

      case 2:
        setIndexPage2(200);
        console.log(indexPage2);
        break;

      case 3:
        setIndexPage3(300);
        console.log(indexPage3);
        break;

      case 4:
        setIndexPage4(400);
        console.log(indexPage4);
        break;

      case 5:
        setIndexPage5(500);
        console.log(indexPage5);
    }
  }
  function IndexAssignDown() {
    switch (count) {
      case 1:
        setIndexPage1(500);
        console.log(indexPage1);
        break;

      case 2:
        setIndexPage2(400);
        console.log(indexPage2);
        break;

      case 3:
        setIndexPage3(300);
        console.log(indexPage3);
        break;

      case 4:
        setIndexPage4(200);
        console.log(indexPage4);
        break;

      case 5:
        setIndexPage5(100);
        console.log(indexPage5);
    }
  }

  //z index dinamico
  useEffect(() => {
    setPreCount(count);
    if (count > preCount) {
      IndexAssignUp();
    } else if (count < preCount) IndexAssignDown();
  }, [count, preCount]);

  //limitar cambio de pagina
  useEffect(() => {
    if (count >= maxPages) {
      setCount(maxPages);
      setClosed("Closed");
    } else {
      setClosed("Open");
    }
    if (count < 0) setCount(0);
  }, [count, maxPages]);

  //cambiar de pagina
  function UpCount() {
    setCount(count + 1);
  }
  function DownCount() {
    setCount(count - 1);
  }
  return (
    <div className="Entrada">
      <button
        className={`prev ${count >= 1 ? isClosed : ""} ${'pageBtn'}`}
        onClick={DownCount}
      >
        <h3><RiArrowLeftSFill /></h3>
        {/*<h3 className="pageNum">{count === maxPages ? "Final" : count === 0 ? "Inicio" : count}</h3>*/}
      </button>

      <div id="book" className={`book ${count >= 1 ? isClosed : ""}`}>
        <div
          id="p1"
          style={{ zIndex: indexPage1 }}
          className={`${"paper"} ${count >= 1 ? "flipped" : ""}`}
        >
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
              <h2 className="page-text"></h2>
            </div>
          </div>
        </div>

        <div
          id="p2"
          style={{ zIndex: indexPage2 }}
          className={`${"paper"} ${count >= 2 ? "flipped" : ""}`}
        >
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

        <div
          id="p3"
          style={{ zIndex: indexPage3 }}
          className={`${"paper"} ${count >= 3 ? "flipped" : ""}`}
        >
          <div className="front">
            <div id="f3" className="front-content">
              <h2>Front 3</h2>
            </div>
          </div>
          <div className="back">
            <div id="b3" className="back-content book-cover ">
              <h2>Back 3</h2>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={UpCount}
        className={`next ${count >= 1 ? isClosed : ""} ${'pageBtn'}`}
      >
        
        {/*<h3 className="pageNum">{count === maxPages ? "Final" : count === 0 ? "Inicio" : count + 1}</h3>*/}
        <h3><RiArrowRightSFill /></h3>
      </button>
    </div>
  );
};

export default Entrada;
