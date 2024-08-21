import { useState } from "react";
import { FiTag, FiPackage  } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function ProductCreate() {
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  function handleCreateProduct() {
    if (!name || !price) {
      return alert("Preencha todos os campos!");
    }

    api.post("/products", { name, price })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        navigate("/");
      }).catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar o produto.");
        }
      });
  }

  return (
    <Container>
    <Form>
      <h1>Cadastro de Produto</h1>

      <Input
        placeholder="Nome"
        type="text"
        icon={FiPackage}
        onChange={e => setName(e.target.value)}
      />

      <Input
        placeholder="Preço"
        type="text"
        icon={FiTag}
        onChange={e => setPrice(e.target.value)}
      />

      <Button
        title="Cadastrar"
        onClick={handleCreateProduct}
      />
    
    </Form>
  </Container>

  )
}