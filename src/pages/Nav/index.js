import './nav.css';
import './navQuery.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){

    return(
        <div className="navigation">
           <nav>
            <ul>
                <li><Link to="/Quem-somos">Quem somos</Link></li>
                <li><Link to="/OqueFazemos">O que fazemos</Link></li>
                <li><Link to="/Projetos">Projetos</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/2">Login</Link></li>
            </ul>
           </nav>
        </div>
    )
}
export default Nav;