import { useState } from "react";
import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";


import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    console.log("Nome: " + name 
      + "\nE-mail: " + email 
      + "\nPassword: " + password)

    alert("Usuário cadastrado com sucesso!")
    //navigate("/");
  }

  return (
    <Container>
      <Form>
        <h1>Crie a sua conta</h1>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title="Cadastrar"
          onClick={handleSignUp}
        />

        <Link to="/">
          <FiArrowLeft />
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}