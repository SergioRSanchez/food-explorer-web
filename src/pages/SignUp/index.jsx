import { useState } from 'react';
import { FiMail, FiUser, FiEye, FiEyeOff } from 'react-icons/fi';
import { TailSpin } from 'react-loading-icons';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Logo, Form } from './styles';


export function SignUp() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Fill in all fields");
    }

    setIsLoading(true);
    api.post("/users", { name, email, password }).then(() => {
      alert("User successfully registered!");
      navigate("/");
    }).catch(error => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("An unexpected error occurred. Please try again later.");
      }
    })

  }

  function onEnterKeyPress(e) {
    if (e.key === 'Enter') {
      handleSignUp();
    }
  }

  return (
    <Container>
      <Logo />
      <Form>
        <h1>Crie sua conta</h1>

        <label htmlFor="name">Seu nome</label>
        <Input
          placeholder="Exemplo: Maria da Silva"
          type="text"
          icon={FiUser}
          id="name"
          onChange={(e) => setName(e.target.value)}
          onKeyPress={onEnterKeyPress}
        />

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

        {
          isLoading
            ?
            <Button title="Carregando" icon={TailSpin} />
            :
            <Button title="Criar conta" onClick={handleSignUp} />
        }

        <Link to="/">Já tenho uma conta</Link>

      </Form>
    </Container>
  )
}