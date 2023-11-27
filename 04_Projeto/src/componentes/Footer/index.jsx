import { Rodape, Line, ImgWave } from "./styles"

import wave from '../../imgs/wave.png'

import { Menu } from '../Menu'

export function Footer(){
    return(
        <Rodape>
            <Line/>
        
            <Menu/>

            <ImgWave src={wave} alt="imagem de fundo do footer" />
        </Rodape>
    )
}