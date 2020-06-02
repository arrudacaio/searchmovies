import React from "react";
import Card from "../../components/Card/Card";
import api from "../../services/api";
import "./styles.css";

function Main() {
  return (
    <div className="box">
      <div className="container">
        <h1 className="container-title">SEARCH MOVIES</h1>
        <form>
          <input
            type="text"
            placeholder="Movie Name..."
            className="container-input"
          />
          <button type="submit">SEARCH</button>
        </form>
      </div>
      <Card
        title="interestelar"
        data="November 2014"
        resume="A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. "
      />
    </div>
  );
}

export default Main;
