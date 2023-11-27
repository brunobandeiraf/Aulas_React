import "./styles.css"

import img1 from '../../imgs/img1.jpg'

export function Main(){
    return(
        <div id="main">
            <div id="image">
                <img src={img1} alt="Desenho de uma pessoa com uma camisa amarela com móveis" />
            </div>
            
            <h1>O seu próximo <span>destino</span> pode estar aqui...</h1>
            <p>
                Aqui você encontra uma seleção de <strong>pacotes completos</strong>
                para as suas férias!
                <br />
                <br />
                Na <strong>ConnectFlight</strong> você encontra pacotes de viagens nacionais e internacionais 
                que incluem: passagens aéreas, hotéis, café da manhã, e até seguro 
                viagem com <strong>preços arrasadores!</strong>
                <br />
                <br />
                Se você ainda não tem um destino definido, confira nossa seção de ofertas.
            </p>
        </div>
    )
}