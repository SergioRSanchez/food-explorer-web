import styled from 'styled-components';

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';


export const Container = styled.div`
  display: flex;
  width: 21rem;
  height: 29.2rem;
  padding: 2.4rem;
  flex-direction: column;
  align-items: center;
  border-radius: .8rem;
  border: .1rem solid ${({ theme }) => theme.COLORS.DARK_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  position: relative;

  a {
    display: flex;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > span > svg {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    cursor: pointer;
  }

  img {
    width: 8.8rem;
    height: 8.8rem;
    flex-shrink: 0;

    border-radius: 50%;
  }

  p {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    margin-top: 1.2rem;
    margin-bottom: 1.2rem;

    text-align: center;
  }

  small {
    display: none;
  }

  small + p {
    font-family: Roboto;
    margin-top: 0;
    margin-bottom: 0;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
  }

  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;

    span {
      cursor: pointer;
      display: flex;
    }
  }

  button {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    width: 16.2rem;
    height: 3.2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: auto;
    height: auto;

    > span > svg {
      top: 1.6rem;
      right: 1.6rem;
      width: 2.4rem;
      height: 2.2rem;
    }

    img {
      width: 17.6rem;
      height: 17.6rem;
    }

    p {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 140%;
      
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }

    svg {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }

    small {
      display: block;
      font-family: Roboto;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      text-align: center;
      font-size: 1.4rem;
      line-height: 160%;
      width: 25.6rem;
      height: 4.5rem;
      margin-bottom: 1.5rem;
    }

    small + p {
      font-size: 3.2rem;
      line-height: 160%;
    }

    div {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      p {
        font-family: Roboto;
        font-size: 2rem;
        font-weight: 700;
        line-height: 160%;
      }

      > span > svg {
        width: 2.4rem;
        height: 2.4rem;
      }

    }

    button {
      width: auto;
      height: auto;
      padding: 1.2rem 2.4rem;
    }

  }
`;