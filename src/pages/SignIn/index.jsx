import { useState } from 'react';
import { FiMail, FiEye, FiEyeOff } from 'react-icons/fi'

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Logo, Form } from './styles';


export function SignIn() {
  const [showPassword, setShowPassword] = useState(false)

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <Container>
      <Logo />
      <Form>
        <h1>Faça login</h1>

        <label htmlFor="email">Email</label>
        <Input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          icon={FiMail}
          id="email"
        />

        <label htmlFor="password">Senha</label>
        <Input
          placeholder="No mínimo 6 caracteres"
          type={showPassword ? 'text' : 'password'}
          icon={showPassword ? FiEye : FiEyeOff}
          onClickHandlePasswordType={handleShowPassword}
          id="password"
        />

        <Button title="Entrar" />

        <a>Criar uma conta</a>

      </Form>
    </Container>
  )
}