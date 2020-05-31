import React from 'react';
import './styles.css';

function Card(){
    return(
        <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png" className="card-img" />
            <div className="card-info">
                <h1 className="card-info__title">Titulo do filme</h1>
                <h2 className="card-info__data">November 5, 2014</h2>
                <p className="card-info__resume">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>
        </div>
    );
}

export default Card;