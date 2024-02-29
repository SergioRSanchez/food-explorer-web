import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import homeBanner from '../../assets/home-banner.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  footer {
    position: relative;
    margin-top: 62px;
    max-width: 100vw;
    width: calc(100vw - 17px);
  }
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  margin-top: calc(114px + 44px);
  position: relative;
  padding: 36px 21px 22px 153px;

  margin-left: 30px;
  margin-right: 16px;

  background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
  border-radius: 3px;

  img {
    position: absolute;
    width: 191px;
    height: 149px;
    flex-shrink: 0;
    /* opacity: .8; */
    bottom: 0;
    left: -30px;
  }

  h2 {
    font-size: 18px;
    line-height: 140%;
    margin-bottom: 3px;
  }

  p {
    font-size: 12px;
    line-height: 140%;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: calc(114px + 164px);
    padding: 88px 80px 92px 598px;

    margin-left: 123px;
    margin-right: 123px;

    img {
      width: 632px;
      height: 406px;
      bottom: 0;
      left: -60px;
    }

    h2 {
      font-size: 40px;
      margin-bottom: 8px;
    }

    p {
      font-size: 16px;
      line-height: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;

  margin-top: 62px;

  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 140%;
    margin: 0 0 28px 13px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0 123px;

    margin-top: 49px;

    h2 {
      font-size: 32px;
      margin: 0 0 28px 0px;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  --swiper-theme-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  --swiper-navigation-size: 40px;

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