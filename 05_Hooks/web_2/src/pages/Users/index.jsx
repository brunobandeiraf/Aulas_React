import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Container, Header, Item } from "./styles";
import { Button } from '../../components/Button';

import { api } from "../../service/api";

export function Users() {
  const navigate = useNavigate();

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        
        const response = await api.get('/users');
        const users = response.data;
        setUserList(users);

      } catch (error) {
        console.error('Erro ao recuperar a lista de usuários', error);
      }
    }

    fetchUsers();
  }, []); 

  return (
    <Container>
      <Header>
        <h1>Usuários Cadastrados</h1>

        <nav>
          <Button title="Voltar" onClick={() => navigate('/')} />
        </nav>
      </Header>

      {
        userList.map((user) => (
          <Item key={user}>
            <strong>Nome:</strong> {user.name}, <strong>Email:</strong> {user.email}
          </Item>
        ))
      }

    </Container>

  )
}