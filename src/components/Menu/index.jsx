import { FiX, FiSearch } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../Input';
import { Footer } from '../Footer';

import { Container, Header, Content } from './styles';

export function Menu({ onClickHandleMenu }) {
  const navigate = useNavigate();

  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <>
      <Container>
        <Header>
          <p><FiX size={18} onClick={onClickHandleMenu} /></p>
          <span>Menu</span>
        </Header>

        <Content>
          <Input
            placeholder="Busque por pratos ou ingredientes"
            type="text"
            icon={FiSearch}
            id="name"
          />

          <button onClick={handleSignOut}>Sair</button>
        </Content>
      </Container>
      <Footer />
    </>
  )
}