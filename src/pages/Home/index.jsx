import { useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from 'swiper/modules';

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';

import { Container, Banner, Content, Cards } from './styles';

register();

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar'

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

  const [sliderPerView, setSliderPerView] = useState(2)
  const [spaceBetweenSlides, setSpaceBetweenSlides] = useState(16)
  const [enableSwiperNavigation, setEnableSwiperNavigation] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < DEVICE_BREAKPOINTS.LG.split('px')[0]) {
        const numberOfSlides = (window.innerWidth - 48) / (210 + 16)
        setSliderPerView(numberOfSlides)
        setSpaceBetweenSlides(16)
        setEnableSwiperNavigation(false)
      } else {
        const numberOfSlides = (window.innerWidth - 242) / (304 + 27)
        setSliderPerView(numberOfSlides)
        setSpaceBetweenSlides(27)
        setEnableSwiperNavigation(true)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => { window.removeEventListener("resize", handleResize) }
  }, [])


  return (
    <Container>


      {!openMenu
        ?
        <>
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
                slidesPerView={sliderPerView}
                spaceBetween={spaceBetweenSlides}
                navigation={enableSwiperNavigation}
                freeMode={true}
                modules={[FreeMode]}
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

          <Content>
            <h2>Sobremesas</h2>

            <Cards>
              <Swiper
                slidesPerView={sliderPerView}
                spaceBetween={spaceBetweenSlides}
                navigation={enableSwiperNavigation}
                freeMode={true}
                modules={[FreeMode]}
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

          <Content>
            <h2>Bebidas</h2>

            <Cards>
              <Swiper
                slidesPerView={sliderPerView}
                spaceBetween={spaceBetweenSlides}
                navigation={enableSwiperNavigation}
                freeMode={true}
                modules={[FreeMode]}
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

          <Footer />
        </>

        : <Menu onClickHandleMenu={handleOpenMenu} />
      }

    </Container >
  )
}