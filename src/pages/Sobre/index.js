import React from 'react';
import './sobre.css';

function Sobre(){
    return(
        <div className='box-sobre'>
            <h1>Sobre a empresa</h1>
            <p>
            <strong>Em Janeiro de 2022 a DEEP CODE iniciou as suas atividades.</strong> Pequena e nova no mercado, a conquista dos primeiros clientes se deu através de um atendimento singular e personalizado. Sempre preocupados com a satisfação de nossos clientes, conquistamos cada vez mais reconhecimento no mercado. 
            Tivemos muita dedicação para construir uma empresa sólida e diferenciada em um mercado altamente competitivo.
            </p>

            <p>
            O crescimento trouxe a maturidade empresarial e, com o foco sempre no cliente, consolidamos os diferenciais estratégicos nos quais embasamos a nossa filosofia de trabalho: Transparência, Agilidade, Flexibilidade e Custos Competitivos.
            </p>

            <p>
            Muito além de oferecermos Objetividade, Flexibilidade, Dinamismo e Experiência, acreditamos no poder transformador da tecnologia para revolucionar os negócios e na capacidade de nossos talentos para potencializar esta transformação digital.
            </p>

            <p>
            Aos que fazem, ou fizeram, parte dessa história, nosso muito obrigado pela parceria. <strong>Aos que chegam agora, sejam muito bem-vindos.</strong>
            </p>

            <div className='button-verMais'>
                <a href="#">Ver mais..</a>

            </div>
        </div>
    )
}
export default Sobre;