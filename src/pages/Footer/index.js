import React, { useState } from "react";
import './footer.css';
import './footerQuery.css';
import { Link } from "react-router-dom";


function Footer() {

    const [titulo, setTitulo] = useState('Fale conosco');
    const [email, setEmail] = useState('Email - e169acad@cps.sp.gov.br');
    const [tel, setTel] = useState('Contato - (11)  22547627');

    return (
        <div className="box-footer">
            <div className="container-mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14631.464492694822!2d-46.47053988145778!3d-23.537317088568525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6427fe3f5b23%3A0x54b863d343c81f8f!2sEtec%20Itaquera!5e0!3m2!1spt-BR!2sbr!4v1693870542560!5m2!1spt-BR!2sbr"
                    width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="container-faleConosco">
                <div className="titulo">
                    <h1>{titulo}</h1>
                </div>
                <div className="contato">
                    <h2>{email}</h2>
                    <h2>{tel}</h2>
                </div>
                <div className="icons-redes">
                    <a href="https://www.linkedin.com/in/vitor-hugo-9b3b63243/"><img src={require('../../Imgs/brakedin.png')} /></a>

                    <Link to="/facebook"><img src={require('../../Imgs/facebrank.png')} /></Link>

                    <a href="https://github.com/01Vitorhugo"><img src={require('../../Imgs/gitbranc.png')} /></a>

                    <Link to="/whats"><img src={require('../../Imgs/whatsbranco.png')} /></Link>
                </div>


            </div>
            <div className="direitos">
                <p>@copyright - Deep Code 2023</p>

            </div>

        </div>
    )
}
export default Footer;