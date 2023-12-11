import { FiTruck, FiTag, FiShoppingCart, FiUserPlus } from 'react-icons/fi';

import { Container } from "./styles";
import { Feature } from '../../components/Feature';
import { Header } from '../../components/Header';

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Feature title="Produto" icon={FiTag} to="/product" />
        <Feature title="Cadastrar Usuário" icon={FiUserPlus} to="/register" />
      </main>
    </Container>
  )
}