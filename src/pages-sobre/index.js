import NavMenu from '../pages/Nav';
import Equipe from './Equipe';
import HistoriaEmpresa from './HistoriaEmpresa';
import HistoriaLogo from './HistoriaLogo';
import './pageSobre.css';


function PageSobre(){

    return(
        <div className='container-pageSobre'>
            <NavMenu/>

            <div className='logo-pageSobre'>
                <img src={require('../Imgs/logo_12.jpg')} />
                <h1>2022 O COMEÇO</h1>
            </div>

            <HistoriaLogo/>
            <HistoriaEmpresa/>
            <Equipe/>
          
        </div>
    )
}
export default PageSobre;