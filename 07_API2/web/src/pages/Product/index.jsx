import { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";

import { Container, Header, Item } from "./styles";
import { Button } from '../../components/Button';

import { api } from "../../services/api";

export function Product() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  // const products = Array(20)
  //   .fill({ name: 'Produto' })
  //   .map((item, index) => (`${item.name} ${index + 1}`));

  useEffect(() => {
    // Função para buscar os produtos
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        // Armazena os produtos no estado
        setProducts(response.data); 
      } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
      }
    };

    fetchProducts(); // Chama a função de busca
  }, []); // O array vazio faz com que a busca aconteça apenas uma vez, quando o componente monta


  return (
    <Container>
      <Header>
        <h1>Produtos</h1>

        <nav>
          <Button title="Cadastrar" onClick={() => navigate('/product-react')}/>
          <Button title="Voltar" onClick={() => navigate('/')} />
        </nav>
      </Header>

      {/* {
        products.map((product) => (
          <Item key={product}>
            <span>{product}</span>
          </Item>
        ))
      } */}

        {
          products.map((product) => (
            <Item key={product.id}>
              <span>{product.name}</span>
            </Item>
          ))
        }

    </Container>

  )
}