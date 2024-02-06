import styled from 'styled-components';

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 264px;
    height: 264px;
  }

  section {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    
    > div div div div {
      align-items: center;
    }
    
    margin-top: 42px;
    gap: 48px;

    img {
      width: 390px;
      height: 390px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 316px;

  p {
    font-size: 27px;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  p + h2 {
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
  }

  h2 + h3 {
    display: none;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
  }

  div h4 {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;

    padding: 4px 8px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 100%;

    p {
      font-size: 40px;
    }

    p + h2 {
      display: none;
    }

    h2 + h3 {
      display: block;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      max-width: 687px;
    }

    div {
      justify-content: start;
    }
  }
`;

export const Order = styled.div`
  display: flex;

  margin-top: 48px;

  gap: 16px;

  button {
    font-size: 9px;
    font-weight: 500;
    line-height: 16.225px;

    padding: 8px 16px;
    gap: 5px;

    svg {
      width: 21px;
      height: 21px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 33px;

    div {
      align-items: center;
      align-content: center;
    }

    button {
      display: flex;
      width: fit-content;
      font-size: 14px;
      line-height: 24px;

      padding: 12px 24px;

      svg {
        display: none;
      }
    }
  }
`;

export const Quantity = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  svg {
    width: 27px;
    height: 27px;
    cursor: pointer;
  }

   p {
    font-family: Roboto;
    font-size: 22px;
    font-weight: 700;
    line-height: 160%;
   }
`;