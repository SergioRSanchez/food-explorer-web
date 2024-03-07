import { useState } from 'react';
import { FiMail, FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Logo, Form } from './styles';


export function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password })
  }

  function onEnterKeyPress(e) {
    if (e.key === 'Enter') {
      handleSignIn();
    }
  }

  return (
    <Container>
      <Logo />
      <Form>
        <h1>Faça login</h1>

        <label htmlFor="email">Email</label>
        <Input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="email"
          icon={FiMail}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={onEnterKeyPress}
        />

        <label htmlFor="password">Senha</label>
        <Input
          placeholder="No mínimo 6 caracteres"
          type={showPassword ? 'text' : 'password'}
          icon={showPassword ? FiEye : FiEyeOff}
          onClickHandlePasswordType={handleShowPassword}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={onEnterKeyPress}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar uma conta</Link>

      </Form>
    </Container>
  )
}