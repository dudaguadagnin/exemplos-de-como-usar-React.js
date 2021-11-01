import React from "react";
import "../../index.css";
import DudaA from "../atoms/DudaA";
import DudaB from "../atoms/DudaB";
import imgFunc from "../../assets/function.jpg";
import imgClas from "../../assets/class.jpg";

function CriandoComponente() {
  return (
    <div className="container blue">
      {/* passando props */}
      <h2 className="bold">Criando Componentes</h2>
      <div className="separator">
        <div>
          <h4>componente criado com função</h4>
          <DudaA ola={"sou prop e vim por parametros"} />
          <img className="imagem" src={imgFunc} />
        </div>

        <div>
          <h4>componente criado com classe</h4>
          <DudaB
            oi={"sou props e vim pelo this"} /* outro tipo de comentario */
          />
          <img className="imagem" src={imgClas} />
        </div>
      </div>
    </div>
  );
}

export default CriandoComponente;
