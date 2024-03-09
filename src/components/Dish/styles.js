import styled from 'styled-components';

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;

  img {
    width: 26.4rem;
    height: 26.4rem;
    border-radius: 50%;
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
    
    margin-top: 4.2rem;
    gap: 4.8rem;

    img {
      width: 39rem;
      height: 39rem;
    }
  }
`;

export const Content = styled.div`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 31.6rem;

  p {
    font-size: 2.7rem;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-align: center;
  }

  p + h2 {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 140%;
  }

  h2 + h3 {
    display: none;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 2.4rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  div h4 {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    padding: .4rem .8rem;
    border-radius: .5rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 100%;

    p {
      font-size: 4rem;
      text-align: left;
    }

    p + h2 {
      display: none;
    }

    h2 + h3 {
      display: block;
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      max-width: 68.7rem;
    }

    div {
      justify-content: start;
    }
  }
`;

export const Order = styled.div`
  display: flex;

  margin-top: 4.8rem;

  gap: 1.6rem;

  button {
    font-size: .9rem;
    font-weight: 500;
    line-height: 1.6225rem;

    padding: .8rem 1.6rem;
    gap: .5rem;

    svg {
      width: 2.1rem;
      height: 2.1rem;
    }
  }

  .edit-button {
    font-size: 1.4rem;
    padding: 1.2rem 2.4rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 3.3rem;

    div {
      align-items: center;
      align-content: center;
    }

    button {
      display: flex;
      width: fit-content;
      font-size: 1.4rem;
      line-height: 2.4rem;

      padding: 1.2rem 2.4rem;

      svg {
        display: none;
      }
    }
  }
`;

export const Quantity = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;

  svg {
    width: 2.7rem;
    height: 2.7rem;
    cursor: pointer;
  }

   p {
    font-family: Roboto;
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 160%;
   }
`;