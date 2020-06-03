import React, {useState} from "react";
import Card from "../../components/Card/Card";
import axios from "axios";
import "./styles.css";

function Main() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const apiurl = "https://api.themoviedb.org/3/search/movie?api_key=172d2bcd975eca6acc08c0a239f0dc85&language=en-US";

  const baseImg = "https://image.tmdb.org/t/p/w500";


  const handleInput = e => {
    const s = e.target.value;

    setState(prevState => {
      return {...prevState, s: s}
    });

  }

  const search = async e => {
    if(e.key === "Enter") {
      await axios(apiurl + "&query=" + state.s).then(({data}) => {
        let results = data.results;
        
        setState(prevState => {
          return {...prevState, results: results}
        })
      })
    }
  }




  return (
    <div className="box">
      <div className="container">
        <h1 className="container-title">SEARCH MOVIES</h1>
        <input
          type="text"
          placeholder="Movie Name..."
          className="container-input"
          onChange={handleInput}
          onKeyPress={search}
        />
      </div>
      {state.results.map(result => (
        <Card 
          imgURL={baseImg + result.poster_path}
          title={result.title}
          data={result.release_date}
          resume={result.overview}
        />
      ))}
    </div>
  );
}

export default Main;
