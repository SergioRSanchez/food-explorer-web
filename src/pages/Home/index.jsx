import { useState } from 'react';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';

import { Container } from './styles';

export function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu(!openMenu)
  }

  return (
    <Container>
      <Header onClickHandleMenu={handleOpenMenu} />

      {openMenu ? <Menu onClickHandleMenu={handleOpenMenu} /> : null}

    </Container>
  )
}