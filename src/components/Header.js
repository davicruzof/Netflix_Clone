import React from 'react';
import './Header.css';

export default ({black}) => {
    return(
        <header id='headerContainer' className={black ? "black" : ''}>
            <div className='menu'>
                <div className="header--logo">
                    <a href="/">
                        <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix" /> 
                    </a>
                </div>
                <div className="categorias">
                    <div className="active">Inicio</div>
                    <div className="item">Series</div>
                    <div className="item">Filmes</div>
                    <div className="item">Minha Lista</div>
                </div>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt="usuario" /> 
                </a>
            </div>
        </header>
    )
}