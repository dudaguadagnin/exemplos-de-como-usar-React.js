import React, { Component } from "react";
import '../../index.css';

// criando componente como classe, e recebendo as props pelo this
class DudaB extends Component {
  render() {
    return <div className="conteudo">{this.props.oi}</div>;
    // as classes por "className"
  }
}
export default DudaB;
