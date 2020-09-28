import React from 'react';
import './Header.css';

export default ({black}) => {
    return(
        <header className={black ? "black" : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="netflix" /> 
                </a>
            </div>
            <div className="categorias">
                <div className="active">Inicio</div>
                <div className="item">Series</div>
                <div className="item">Filmes</div>
                <div className="item">Minha Lista</div>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt="usuario" /> 
                </a>
            </div>
        </header>
    )
}