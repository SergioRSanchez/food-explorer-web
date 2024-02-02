import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from 'swiper/modules';



import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Card } from '../../components/Card';

import { Container, Banner, Content, Cards } from './styles';
import 'swiper/css';
import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import homeBanner from '../../assets/home-banner.png'

export function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu(!openMenu)
  }

  const [favorite, setFavorite] = useState(false);

  function handleFavorite() {
    setFavorite(!favorite)
  }


  return (
    <Container>


      {!openMenu
        ? <>
          <Header onClickHandleMenu={handleOpenMenu} />

          <Banner>
            <img src={homeBanner} alt="Imagem com vários macarons de diversas cores." />

            <div>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </Banner>

          <Content>
            <h2>Refeições</h2>

            <Cards>
              <Swiper
                slidesPerView={2.5}
                spaceBetween={16}
                // navigation
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[Pagination, FreeMode]}

              >
                <SwiperSlide>
                  <Card
                    onClickHandleFavorite={handleFavorite}
                    color={favorite ? 'red' : ''}
                    title="Salada Ravanello"
                    description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                    price="49,97"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    onClickHandleFavorite={handleFavorite}
                    color={favorite ? 'red' : ''}
                    title="Salada Ravanello"
                    description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                    price="49,97"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    onClickHandleFavorite={handleFavorite}
                    color={favorite ? 'red' : ''}
                    title="Salada Ravanello"
                    description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                    price="49,97"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    onClickHandleFavorite={handleFavorite}
                    color={favorite ? 'red' : ''}
                    title="Salada Ravanello"
                    description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                    price="49,97"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    onClickHandleFavorite={handleFavorite}
                    color={favorite ? 'red' : ''}
                    title="Salada Ravanello"
                    description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                    price="49,97"
                  />
                </SwiperSlide>
              </Swiper>
            </Cards>

          </Content>
        </>

        : <Menu onClickHandleMenu={handleOpenMenu} />
      }

    </Container >
  )
}