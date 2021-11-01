import React from "react";
import "../../index.css";
import MudarCor from "../atoms/MudarCor";
import mudacor from "../../assets/mudacor.jpg";
import trescomp from "../../assets/trescomp.jpg";

function ImportarComponente(props) {
  return (
    <div>
      <h2 className="bold">Passando props para componente filho distante</h2>
      <MudarCor color="azul">
        <h5>{props.message}</h5>
      </MudarCor>
    </div>
  );
}

function TresComponentes() {
  return (
    <div className="container blue">
      <ImportarComponente message="Agora posso ter uma nova cor!" />
      <div className="separator centered">
        <div>
          <h4>O componente mudar cor utiliza a prop especial children</h4>
          <img className="imagem" src={mudacor} />
          <h4>
            MudarCor é importado em outro componente e recebe a por cor
            na prop "color".
          </h4>
          <h4>
            Qualquer conteúdo dentro da tag JSX do componente MudarCor
            vai ser passado a ele como prop children
          </h4>
        </div>
        <div>
          <img className="imagem" src={trescomp} />
        </div>
      </div>
    </div>
  );
}

export default TresComponentes;
