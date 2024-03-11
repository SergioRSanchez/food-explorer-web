import { FiX, FiSearch } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';

import { Input } from '../Input';
import { Footer } from '../Footer';

import { Container, Header, Content } from './styles';

export function Menu({ onClickHandleMenu, search, setSearch, openMenu }) {
  const navigate = useNavigate();

  const { signOut, user } = useAuth();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <>
      <Container data-menu-is-open={openMenu}>
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {
            user.role === USER_ROLE.ADMIN && <button onClick={() => navigate("/new")}>Novo prato</button>
          }
          <button onClick={handleSignOut}>Sair</button>
        </Content>
        <Footer />
      </Container>
    </>
  )
}