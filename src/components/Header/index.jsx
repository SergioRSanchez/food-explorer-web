import { Container } from './styles';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { PiReceiptLight } from "react-icons/pi";
import { RxExit } from "react-icons/rx";


import { Input } from '../Input';
import { Button } from '../Button';

import logoUser from '../../assets/logo-user.png';
import logoAdmin from '../../assets/logo-admin.png';

export function Header() {
  return (
    <Container>
      <FiMenu size={24} />
      <img src={logoUser} alt="logo com o escrito food explorer" />
      <PiReceiptLight size={24} />

      <Input
        placeholder="Busque por pratos ou ingredientes"
        type="text"
        icon={FiSearch}
        id="name"
      />

      <Button title={"Pedidos"} icon={PiReceiptLight} />

      <p><RxExit size={24} /></p>
    </Container>
  )
}