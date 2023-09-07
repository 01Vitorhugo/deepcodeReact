import React from "react";
import './error.css';
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="error">
            <img src={require('./img-erro/error.png')} />
            <div className="texto-error">
                <h1>Opss.. Página não encontrada</h1>
                <h3>Voltara para <Link to="/">Home</Link></h3>
            </div>

            <div className="logo">
                <img src={require('../../Imgs/logo_12.jpg')} />
            </div>

        </div>
    )
}
export default Error;