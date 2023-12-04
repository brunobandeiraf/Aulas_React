import { Container, Title, Paragrafo} from "./styles.js"

//import { Main } from '../../componentes/Main'
import { Footer } from '../../componentes/Footer'
import { Button } from '../../componentes/Button'

export function Destiny(){
    return(
        <>
            <Container>
                <Title>
                    Lero lero lero de Título
                </Title>
                <Paragrafo>
                    Lero lero lero lero lero lero lero lero lero lero 
                </Paragrafo>

                <Button title="Login" loading />
                <Button title="Cadastrar" />
                <Button title="Voltar" />
            </Container>
           
            <Footer/>
        </>
    )
}