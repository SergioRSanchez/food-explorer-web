import { FiMenu, FiSearch } from 'react-icons/fi';
import { PiReceiptLight } from "react-icons/pi";
import { RxExit } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';

import { Input } from '../Input';
import { Button } from '../Button';

import logoUser from '../../assets/logo-user.png';
import logoAdmin from '../../assets/logo-admin.png';
import logoAdminMobile from '../../assets/logo-admin-mobile.png';

import { Container } from './styles';

export function Header({ onClickHandleMenu, search, setSearch }) {
  const navigate = useNavigate();

  const { signOut, user } = useAuth();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <Container>
      <FiMenu size={24} onClick={onClickHandleMenu} />
      {
        user.role === USER_ROLE.ADMIN
          ?
          <>
            {
              window.innerWidth < 1024
                ?
                <img src={logoAdminMobile} alt="logo com o escrito food explorer" className="logo-admin-mobile" />
                :
                <img src={logoAdmin} alt="logo com o escrito food explorer" />
            }
          </>
          :
          <>
            <img src={logoUser} alt="logo com o escrito food explorer" />
            <PiReceiptLight size={24} />
          </>
      }

      <Input
        placeholder="Busque por pratos ou ingredientes"
        type="text"
        icon={FiSearch}
        id="name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {
        user.role === USER_ROLE.ADMIN
          ?
          <Button title={"Novo prato"} className="new-meal" onClick={() => navigate("/new")} />
          :
          <Button title={"Pedidos"} icon={PiReceiptLight} />
      }

      <p onClick={handleSignOut}><RxExit size={24} /></p>
    </Container>
  )
}