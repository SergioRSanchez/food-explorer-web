import { useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from 'swiper/modules';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';

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
import 'swiper/css/scrollbar';

import homeBanner from '../../assets/home-banner.png'

export function Home() {
  const { user } = useAuth();

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu(!openMenu)
  };

  const [favorites, setFavorites] = useState([]);
  const [updateFavorites, setUpdateFavorites] = useState(false);

  function handleFavorite(meal) {
    if (favorites.map(favorite => favorite.meal_id).includes(meal.id)) {
      try {
        api.delete(`/favorites/${meal.id}`).then(() => {
          setUpdateFavorites(prevState => !prevState);
        });
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('An unexpected error occurred. Please try again later.');
        }
      }
    } else {
      try {
        api.post(`/favorites/${meal.id}`).then(() => {
          setUpdateFavorites(prevState => !prevState);
        });
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('An unexpected error occurred. Please try again later.');
        }
      }
    }
  }

  useEffect(() => {
    api.get('/favorites').then(response => {
      setFavorites(response.data);
    });
  }, [updateFavorites]);

  const [sliderPerView, setSliderPerView] = useState(2);
  const [spaceBetweenSlides, setSpaceBetweenSlides] = useState(16);
  const [enableSwiperNavigation, setEnableSwiperNavigation] = useState(false);

  useEffect(() => {
    api.get(`/meals?title=${search}`).then(response => {
      setData(response.data)
    })
  }, [search]);

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
  }, []);



  return (
    <Container>

      <Menu
        search={search}
        setSearch={setSearch}
        onClickHandleMenu={handleOpenMenu}
        openMenu={openMenu}
      />

      <Header
        data-menu-is-open={openMenu}
        search={search}
        setSearch={setSearch}
        onClickHandleMenu={handleOpenMenu}
      />

      <Banner data-menu-is-open={openMenu}>
        <img src={homeBanner} alt="Imagem com vários macarons de diversas cores." />

        <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Banner>

      <Content data-menu-is-open={openMenu}>
        <h2>Refeições</h2>

        <Cards>
          <Swiper
            slidesPerView={sliderPerView}
            spaceBetween={spaceBetweenSlides}
            navigation={enableSwiperNavigation}
            freeMode={true}
            modules={[FreeMode]}
          >
            {
              data &&
              data.map(meal => (
                meal.category === 'refeicao' ?
                  <SwiperSlide key={meal.id} >
                    <Card
                      onClickHandleFavorite={() => handleFavorite(meal)}
                      id={meal.id}
                      color={favorites.map(favorite => favorite.meal_id).includes(meal.id) ? 'red' : ''}
                      title={meal.title}
                      description={meal.description}
                      price={meal.price}
                      image={`${api.defaults.baseURL}/files/${meal.image}`}
                    />
                  </SwiperSlide>
                  : null
              ))
            }

          </Swiper>
        </Cards>

      </Content>

      <Content data-menu-is-open={openMenu}>
        <h2>Sobremesas</h2>

        <Cards>
          <Swiper
            slidesPerView={sliderPerView}
            spaceBetween={spaceBetweenSlides}
            navigation={enableSwiperNavigation}
            freeMode={true}
            modules={[FreeMode]}
          >
            {
              data &&
              data.map(meal => (
                meal.category === 'sobremesa' ?
                  <SwiperSlide key={meal.id}>
                    <Card
                      onClickHandleFavorite={() => handleFavorite(meal)}
                      id={meal.id}
                      color={favorites.map(favorite => favorite.meal_id).includes(meal.id) ? 'red' : ''}
                      title={meal.title}
                      description={meal.description}
                      price={meal.price}
                      image={`${api.defaults.baseURL}/files/${meal.image}`}
                    />
                  </SwiperSlide>
                  : null
              ))
            }
          </Swiper>
        </Cards>

      </Content>

      <Content data-menu-is-open={openMenu}>
        <h2>Bebidas</h2>

        <Cards>
          <Swiper
            slidesPerView={sliderPerView}
            spaceBetween={spaceBetweenSlides}
            navigation={enableSwiperNavigation}
            freeMode={true}
            modules={[FreeMode]}
          >
            {
              data &&
              data.map(meal => (
                meal.category === 'bebida' ?
                  <SwiperSlide key={meal.id}>
                    <Card
                      onClickHandleFavorite={() => handleFavorite(meal)}
                      id={meal.id}
                      color={favorites.map(favorite => favorite.meal_id).includes(meal.id) ? 'red' : ''}
                      title={meal.title}
                      description={meal.description}
                      price={meal.price}
                      image={`${api.defaults.baseURL}/files/${meal.image}`}
                    />
                  </SwiperSlide>
                  : null
              ))
            }
          </Swiper>
        </Cards>

      </Content>

      <Footer />


    </Container >
  )
}