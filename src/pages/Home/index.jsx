import { useState } from 'react';

import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';

import { Container, Banner } from './styles';

import homeBanner from '../../assets/home-banner.png'

export function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu(!openMenu)
  }

  return (
    <Container>
      <Header onClickHandleMenu={handleOpenMenu} />

      {!openMenu
        ? <>
          <Banner>
            <img src={homeBanner} alt="Imagem com vários macarons de diversas cores." />

            <div>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </Banner>
        </>

        : <Menu onClickHandleMenu={handleOpenMenu} />
      }

    </Container>
  )
}