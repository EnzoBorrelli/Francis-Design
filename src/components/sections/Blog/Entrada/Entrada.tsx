import { useEffect, useState } from "react";
import { RiArrowLeftSFill } from "react-icons/ri";
import { RiArrowRightSFill } from "react-icons/ri";
import "./Entrada.scss";


const Entrada: React.FC<{Content: any}> = ({ Content }) => {
  const [count, setCount] = useState(0);
  const [preCount, setPreCount] = useState(0);
  const [isClosed, setClosed] = useState("Open");
  const maxPages = 5;

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
        setIndexPage3(400);
        console.log(indexPage2);
        break;

      case 4:
        setIndexPage4(400);
        setIndexPage3(300);
        console.log(indexPage4);
        break;

      case 5:
        setIndexPage5(500);
        console.log(indexPage5);
    }
  }
  function IndexAssignDown() {
    switch (count) {
      case 0:
        setIndexPage1(500);
        console.log(indexPage1);
        break;
      case 1:
        setIndexPage2(400);
        console.log(indexPage1);
        break;

      case 2:
        setIndexPage2(400);
        setIndexPage3(300);
        console.log(indexPage2);
        break;

      case 3:
        setIndexPage3(400);
        setIndexPage4(200);
        console.log(indexPage3);
        break;

      case 4:
        setIndexPage5(100);
        console.log(indexPage4);
        break;
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
        className={`prev ${count >= 1 ? isClosed : ""} ${"page-btn"}`}
        onClick={DownCount}
      >
        <h3>
          <RiArrowLeftSFill />
        </h3>
        {/*<h3 className="pageNum">{count === maxPages ? "Final" : count === 0 ? "Inicio" : count}</h3>*/}
      </button>

      <div id="book" className={`book ${count >= 1 ? isClosed : ""}`}>
        <div
          id="p1"
          style={{ zIndex: indexPage1 }}
          className={`${"paper"} ${count >= 1 ? "flipped" : ""}`}
        >
          <div className="front">
            <div
              style={{ backgroundColor: Content.CoverColor }}
              id="f1"
              className="front-content book-cover"
            >
              <h2 className="Cover-text">{Content.BookTitle}</h2>
            </div>
          </div>
          <div className="back">
            <div
              id="b1"
              style={{ backgroundImage: `url(${Content.page1bg})` }}
              className="back-content page-img reverse"
            >
              <h2 className="page-text">{Content.page1content}</h2>
            </div>
          </div>
        </div>

        <div
          id="p2"
          style={{ zIndex: indexPage2 }}
          className={`${"paper"} ${count >= 2 ? "flipped" : ""}`}
        >
          <div className="front">
            <div
              style={{ backgroundImage: `url(${Content.page2bgF})` }}
              id="f2"
              className="front-content page-img"
            >
              <h2 className="page-text">{Content.page2contentF}</h2>
            </div>
          </div>
          <div className="back">
            <div
              style={{ backgroundImage: `url(${Content.page2bgB})` }}
              id="b2"
              className="back-content page-img reverse"
            >
              <h2>{Content.page2contentB}</h2>
            </div>
          </div>
        </div>

        <div
          id="p3"
          style={{ zIndex: indexPage3 }}
          className={`${"paper"} ${count >= 3 ? "flipped" : ""}`}
        >
          <div className="front">
            <div
              style={{ backgroundImage: `url(${Content.page3bgF})` }}
              id="f3"
              className="front-content page-img"
            >
              <h2>{Content.page3contentF}</h2>
            </div>
          </div>
          <div className="back">
            <div
              style={{ backgroundImage: `url(${Content.page3bgB})` }}
              id="b3"
              className="back-content page-img reverse"
            >
              <h2>{Content.page3contentB}</h2>
            </div>
          </div>
        </div>
        <div
          id="p4"
          style={{ zIndex: indexPage4 }}
          className={`${"paper"} ${count >= 4 ? "flipped" : ""}`}
        >
          <div className="front">
            <div
              style={{ backgroundImage: `url(${Content.page4bgF})` }}
              id="f4"
              className="front-content page-img"
            >
              <h2>{Content.page4contentF}</h2>
            </div>
          </div>
          <div className="back">
            <div
              style={{ backgroundImage: `url(${Content.page4bgB})` }}
              id="b4"
              className="back-content page-img reverse"
            >
              <h2>{Content.page4contentB}</h2>
            </div>
          </div>
        </div>
        <div
          id="p5"
          style={{ zIndex: indexPage5 }}
          className={`${"paper"} ${count >= 5 ? "flipped" : ""}`}
        >
          <div className="front">
            <div
              style={{ backgroundImage: `url(${Content.page5bg})` }}
              id="f5"
              className="front-content page-img"
            >
              <h2>{Content.page5content}</h2>
            </div>
          </div>
          <div className="back">
            <div
              style={{ backgroundColor: Content.CoverColor }}
              id="b5"
              className="back-content book-cover "
            >
              <h2>Back 5</h2>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={UpCount}
        className={`next ${count >= 1 ? isClosed : ""} ${"page-btn"}`}
      >
        {/*<h3 className="pageNum">{count === maxPages ? "Final" : count === 0 ? "Inicio" : count + 1}</h3>*/}
        <h3>
          <RiArrowRightSFill />
        </h3>
      </button>
    </div>
  );
};

export default Entrada;
