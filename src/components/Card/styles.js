import styled from 'styled-components';

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';


export const Container = styled.div`
  display: flex;
  width: 210px;
  height: 292px;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  position: relative;

  a {
    display: flex;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > span > svg {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }

  img {
    width: 88px;
    height: 88px;
    flex-shrink: 0;
  }

  p {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;

    margin-top: 12px;
    margin-bottom: 12px;
  }

  small {
    display: none;
  }

  small + p {
    font-family: Roboto;
    margin-top: 0;
    margin-bottom: 0;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
  }

  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    span {
      cursor: pointer;
      display: flex;
    }
  }

  button {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    width: 162px;
    height: 32px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: auto;
    height: auto;

    > span > svg {
      
      top: 16px;
      right: 16px;
      width: 24px;
      height: 22px;
    }

    img {
      width: 176px;
      height: 176px;
    }

    p {
      font-size: 24px;
      font-weight: 700;
      line-height: 140%;
      
      margin-top: 15px;
      margin-bottom: 15px;
    }

    small {
      display: block;
      font-family: Roboto;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      text-align: center;
      font-size: 14px;
      line-height: 160%;
      width: 256px;
      height: 45px;
      margin-bottom: 15px;
    }

    small + p {
      font-size: 32px;
      line-height: 160%;
    }

    div {
      display: flex;
      align-items: center;
      gap: 16px;

      p {
        font-family: Roboto;
        font-size: 20px;
        font-weight: 700;
        line-height: 160%;
      }

      > span > svg {
        width: 24px;
        height: 24px;
      }

    }

    button {
      width: auto;
      height: auto;
      padding: 12px 24px;
    }

  }
`;