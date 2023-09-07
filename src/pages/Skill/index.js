import React from "react";
import './skill.css';
import './skillQuery.css';

function Skill(){
    return(
        <div className="box-skill">
            <div className="skill-left">
                <img src={require('./img-skill/contratorosa.png')} alt="" />
                <h1>Como podemos ajudar?</h1>
                <a href="">Fazer orçamento</a>

            </div>
            <div className="skill-right">
                <h1>Desenvolvimento Web</h1>
                <h1>Desenvolvimento Mobile</h1>
                <h1>Desenvolvimento de Software</h1>

            </div>
        </div>
    )
}
export default Skill;