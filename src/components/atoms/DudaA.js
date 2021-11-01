import React from 'react';
import '../../index.css';

function DudaA (props) {
  //outra forma de cria rum componente com função e receber props por parametro
  return <div className="conteudo">{props.ola}</div>;
  // as classes por "className"

}
export default DudaA;