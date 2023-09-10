import './equipe.css'

function Equipe(){
    return(
        <div className='equipe'>
            <h1>Equipe Deep Code 2022 </h1>

            <div className='membros'>
                <img src={require('../../Imgs/breno.jpeg')}/>
                <img src={require('../../Imgs/carlos.jpg')}/>
                <img src={require('../../Imgs/gustavo.jpeg')}/>
                <img src={require('../../Imgs/igor.jpeg')}/>
                <img src={require('../../Imgs/henrique.jpeg')}/>
                <img src={require('../../Imgs/vitor.jpeg')}/>

            </div>
        </div>
    )
}
export default Equipe;