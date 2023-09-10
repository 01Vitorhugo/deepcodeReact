import './historiaEmpresa.css'
import './historiaEmpresaQuery.css'

function HistoriaEmpresa() {
    return (
        <div className='historiaEmpresa'>
            <div className='fundador'>
                <img src={require('../../Imgs/vitor.jpeg')} />
                <p>Vitor Hugo, CEO e Fundador da empresa.</p>
            </div>

            <div className='conteudoHistoria'>
                <p>
                    A história da DEEP CODE, é uma história de sucesso construída a várias mãos. Desde o início das nossas atividades, nos empenhamos em gerar valor aos nossos clientes e proporcionar oportunidades e crescimento aos nossos colaboradores.
                </p>
                <p>
                    Além da busca incessante por gerar resultados, também priorizamos a transparência nas relações com os nossos clientes e colaboradores.
                </p>
                <p>
                    Hoje, nosso objetivo é sermos cada vez mais uma referência de atuação para o mercado de TI. Experiência, dinamismo e flexibilidade são os alicerces da nossa vocação para levar as melhores soluções em TI para negócios de sucesso.
                </p>

            </div>

        </div>
    )
}
export default HistoriaEmpresa;