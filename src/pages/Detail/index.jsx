import { useState } from 'react';
import { FiChevronLeft } from "react-icons/fi";

import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { Dish } from '../../components/Dish';

import { Container, Content } from './styles';

export function Detail() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu(!openMenu)
  }

  return (
    <Container>
      {!openMenu
        ?
        <>
          <Header onClickHandleMenu={handleOpenMenu} />

          <Content>
            <div>
              <span><FiChevronLeft /></span>
              <span>voltar</span>
            </div>

            <Dish />
          </Content>


          <Footer />
        </>

        : <Menu onClickHandleMenu={handleOpenMenu} />
      }
    </Container>
  )
}