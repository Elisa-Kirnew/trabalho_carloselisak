import './Jogos.css'

function Jogos(props) {
    return (
      <div className="jogos">
        <h2>{props.titulo}</h2>
        <h4>{props.preco}</h4>
        <p>{props.descricao}</p>
        <p className="categoria">{props.categoria}</p>
      </div>
    );
  }
  
  export default Jogos;