import { useState } from "react";
import { FiMail, FiLock, FiUserPlus } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";
import { Link } from "react-router-dom";

export function SignIn() {

  const { signIn } = useAuth();

  return (
    <Container>
      <Form>
        <h1>Faça seu login</h1>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button
          title="Entrar"
        />

        <Link to="/register">
          <FiUserPlus />
          Criar conta
        </Link>
      </Form>
    </Container>
  )
}