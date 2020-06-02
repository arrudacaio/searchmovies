import React from 'react';
import './styles.css';

function Card({imgURL,title,data,resume}){
    return(
        <div className="card">
            <img src={imgURL} className="card-img" alt="Movie Poster" />
            <div className="card-info">
                <h1 className="card-info__title">{title}</h1>
                <h2 className="card-info__data">{data}</h2>
                <p className="card-info__resume">{resume}</p>
            </div>
        </div>
    );
}

export default Card;