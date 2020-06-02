import React from 'react';
import './styles.css';

function Card({title,data,resume}){
    return(
        <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png" className="card-img" />
            <div className="card-info">
                <h1 className="card-info__title">{title}</h1>
                <h2 className="card-info__data">{data}</h2>
                <p className="card-info__resume">{resume}</p>
            </div>
        </div>
    );
}

export default Card;