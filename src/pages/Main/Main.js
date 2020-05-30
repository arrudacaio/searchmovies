import React from 'react';
import './styles.css';

function Main(){
    return(
        <div className="container">
            <h1 className="container-title">SEARCH  MOVIES</h1>
            <input type="text" placeholder="Movie Name..." className="container-input"/>
        </div>
    );
}

export default Main;