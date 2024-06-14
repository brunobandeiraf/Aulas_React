import { Container, Titulo } from './styles'
import { FiTruck, FiTag, FiShoppingCart } from 'react-icons/fi';

import { Feature } from '../../components/Feature';

export function Home(){
 
    return(
        <Container>
            <Titulo>Página Home</Titulo>

            <main>
                <Feature title="Home" icon={FiTag} to="/" />
                <Feature title="Sobre" icon={FiTruck} to="/sobre" />
                <Feature title="Cadastro" icon={FiShoppingCart} to="/cadastro" />
            </main>
        </Container>
    )
}