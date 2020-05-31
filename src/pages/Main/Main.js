import React from "react";
import Card from "../../components/Card/Card";
import "./styles.css";

function Main() {
  return (
    <div className="box">
      <div className="container">
        <h1 className="container-title">SEARCH MOVIES</h1>

        <input
          type="text"
          placeholder="Movie Name..."
          className="container-input"
        />
        <select>
          <option>Sort by</option>
          <option>Value 2</option>
        </select>
      </div>
      <Card />
    </div>
  );
}

export default Main;
