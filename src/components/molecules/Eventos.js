import React from "react";
// import Button from "../atoms/Button";
import "../../index.css";
import button1 from "../../assets/button1.jpg";
import submit from "../../assets/submit.jpg";

function click() {
  alert("fui clicado 1x");
}
function enviar(e) {
  e.preventDefault();
  alert("fui enviado");
}

function Eventos() {
  return (
    <div className="container green">
      <h2 className="bold">Eventos</h2>
      <div className="separator">
        <div>
          <h4>capturando um click no botão</h4>
          <div>
            <button onClick={click}>me clique 1x</button>
          </div>
          <img className="imagem" src={button1} />
        </div>

        <div>
          <h4>enviando formulario</h4>
          <form onSubmit={enviar}>
            <input type="text" name="name" />
            <input type="submit" value="Enviar" />
          </form>
          <img className="imagem" src={submit} />
        </div>
      </div>
    </div>
  );
}

export default Eventos;
