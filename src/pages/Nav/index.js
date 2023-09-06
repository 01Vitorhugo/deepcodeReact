import './nav.css';
import './navQuery.css';
import React from 'react';

function Nav(){

    return(
        <div className="navigation">
           <nav>
            <ul>
                <li><a href="#">Quem somos</a></li>
                <li><a href="#">O que fazemos</a></li>
                <li><a href="#">Projetos</a></li>
                <li><a href="#">Contato</a></li>
                <li><a href="#">Login</a></li>
            </ul>
           </nav>
        </div>
    )
}
export default Nav;