import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react'

import dish from '../../assets/dish.png'

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

import { EffectCoverflow } from 'swiper/modules'

import { Container } from './styles';

register();
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useEffect, useState } from 'react';

export function Teste() {
  const [sliderPerView, setSliderPerView] = useState(2)


  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < DEVICE_BREAKPOINTS.SM.split('px')[0]) {
        setSliderPerView(1)
      } else if (window.innerWidth < DEVICE_BREAKPOINTS.LG.split('px')[0]) {
        setSliderPerView(2)
      } else {
        setSliderPerView(3)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => { window.removeEventListener("resize", handleResize) }
  }, [])

  const data = [
    { id: 1, image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png' },
    { id: 2, image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png' },
    { id: 3, image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/03/Frame-321.png' },
    { id: 4, image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/01/thumb-1.png' },
    // { id: 5, image: dish },
  ]
  return (
    <div>
      <h1>Swipper</h1>

      <Container>
        <Swiper
          slidesPerView={sliderPerView}
          // pagination={{ clickable: true }}
          navigation
          modules={[EffectCoverflow]}
          effect='coverflow'
        // breakpoints={{
        //   320: {
        //     slidesPerView: 1,
        //     spaceBetween: 20
        //   },
        //   480: {
        //     slidesPerView: 2,
        //     spaceBetween: 30
        //   },
        //   640: {
        //     slidesPerView: 3,
        //     spaceBetween: 40
        //   },
        //   992: {
        //     slidesPerView: 3,
        //     spaceBetween: 30
        //   }
        // }}
        // autoplay={{ delay: 1000 }}
        >
          {
            data.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.image} alt="ada" />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Container>
    </div>
  )
}