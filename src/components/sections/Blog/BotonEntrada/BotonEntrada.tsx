import "./BotonEntrada.scss"

interface BotonEntradaProps {
    Click: React.MouseEventHandler;
    CoverColor: string;
    BookTitle: string;
  }

  const BotonEntrada: React.FC<BotonEntradaProps> = ({ Click, CoverColor, BookTitle }) => {
  return (
    <button onClick={Click} style={{color:CoverColor}} className="btn-entrada"><h2 className="btn-entrada-titulo">{BookTitle}</h2></button>
  )
}

export default BotonEntrada