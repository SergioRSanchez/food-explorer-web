import { FiMenu, FiSearch } from 'react-icons/fi';
import { PiReceiptLight } from "react-icons/pi";
import { RxExit } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../Input';
import { Button } from '../Button';

import logoUser from '../../assets/logo-user.png';
import logoAdmin from '../../assets/logo-admin.png';

import { Container } from './styles';

export function Header({ onClickHandleMenu }) {
  const navigate = useNavigate();

  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <Container>
      <FiMenu size={24} onClick={onClickHandleMenu} />
      <img src={logoUser} alt="logo com o escrito food explorer" />
      <PiReceiptLight size={24} />

      <Input
        placeholder="Busque por pratos ou ingredientes"
        type="text"
        icon={FiSearch}
        id="name"
      />

      <Button title={"Pedidos"} icon={PiReceiptLight} />

      <p onClick={handleSignOut}><RxExit size={24} /></p>
    </Container>
  )
}