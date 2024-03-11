import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import homeBanner from '../../assets/home-banner.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  footer {
    margin-top: 6.2rem;
  }
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  margin-top: calc(11.4rem + 4.4rem);
  position: relative;
  padding: 3.6rem 2.1rem 2.2rem 15.3rem;

  margin-left: 3rem;
  margin-right: 1.6rem;

  background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
  border-radius: .3rem;

  img {
    position: absolute;
    width: 19.1rem;
    height: 14.9rem;
    flex-shrink: 0;
    bottom: 0;
    left: -3rem;
  }

  h2 {
    font-size: 1.8rem;
    line-height: 140%;
    margin-bottom: .3rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 140%;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: calc(11.4rem + 16.4rem);
    padding: 8.8rem 8rem 9.2rem 59.8rem;

    margin-left: 12.3rem;
    margin-right: 12.3rem;

    img {
      width: 63.2rem;
      height: 40.6rem;
      bottom: 0;
      left: -6rem;
    }

    h2 {
      font-size: 4rem;
      margin-bottom: .8rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;

  margin-top: 6.2rem;

  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 140%;
    margin: 0 0 2.8rem 1.3rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0 12.3rem;

    margin-top: 4.9rem;

    h2 {
      font-size: 3.2rem;
      margin: 0 0 2.8rem 0;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  --swiper-theme-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  --swiper-navigation-size: 4rem;

  .swiper {
    width: 100%;
    mask: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    .swiper {
      mask: linear-gradient(to right, transparent, white 1%, white 99%, transparent);
    }
  }
`;