import { useNavigate } from "react-router-dom";

import { Container, Header, Item } from "./styles";
import { Button } from '../../components/Button';

export function Users() {
  const navigate = useNavigate();

  const products = Array(15)
    .fill({ name: 'User' })
    .map((item, index) => (`${item.name} ${index + 1}`));

  return (
    <Container>
      <Header>
        <h1>Usuários</h1>

        <nav>
          <Button title="Voltar" onClick={() => navigate('/')} />
        </nav>
      </Header>

      {
        products.map((user) => (
          <Item key={user}>
            <span>{user}</span>
          </Item>
        ))
      }
    </Container>

  )
}