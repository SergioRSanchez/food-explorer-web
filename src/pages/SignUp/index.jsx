import { FiMail, FiUser, FiEye, FiEyeOff } from 'react-icons/fi'

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Logo, Form } from './styles';


export function SignUp() {
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
        />

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
          type="password"
          icon={FiEyeOff}
          id="password"
        />

        <Button title="Criar conta" />

        <a>Já tenho uma conta</a>

      </Form>
    </Container>
  )
}