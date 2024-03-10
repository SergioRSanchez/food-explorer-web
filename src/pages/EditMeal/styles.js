import styled from 'styled-components';

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  min-height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;

  footer {
    position: relative;
    margin-top: 5.4rem;
    max-width: 100vw;
    width: calc(100vw - 1.7rem);
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    footer {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  margin-top: calc(11.4rem + 1.1rem);
  padding: 0 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  button svg {
    width: 2.2rem;
    height: 2.2rem;
  }

  button span {
    font-size: 1.6rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: calc(9.6rem + 4rem);
    padding: 0 12.3rem;
    padding-bottom: calc(5.4rem + 7.7rem);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  > h1 {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
  }

  h1:nth-child(2) {
    display: none;
  }

  > h1 + div,
  > h1 +div + div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .image label + label {
    font-size: 1.4rem;
  }

  .image label + label + label {
    display: none;
  }

  .image,
  .name,
  .category,
  .ingredients,
  .price {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  label {
    font-family: Roboto;
    font-size: 1.6rem;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  input[type=file],
  .image label + div {
    display: none;
  }

  input[type=number]::-webkit-inner-spin-button {
    display: none;
  }

  label + label {
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border-radius: 8px;
    font-family: 'Roboto', sans-serif;
    height: 4.8rem;
    width: 100%;
    cursor: pointer;
    padding: 1.2rem 3.2rem;

    svg {
      width: 2.4rem;
      height: 2.4rem;
      margin-right: .8rem;
    }
  }

  .image-label-filed {
    border: ${({ theme }) => theme.COLORS.MINT_100} .1rem solid;
  }

  div + label + div + label {
    margin-top: 2.4rem;
  }

  div + div + label + div + div {
    display: flex;
    align-items: flex-start;
    gap: 3.2rem;
    align-self: stretch;

    button:first-child {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
    
    button:first-child:hover {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
    }
  }

  > button {
    margin-top: .8rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 3.2rem;

    h1:nth-child(1) {
      display: none;
    }
    
    h1:nth-child(2) {
      display: block;
    }

    > h1 + div,
    > h1 +div + div {
      display: flex;
      flex-direction: row;
      gap: 3.2rem;
      width: 100%;
    }

    .image label + label {
      display: none;
    }

    .image label + label + label {
      display: flex;
      font-size: 1.6rem;
      width: max-content;
    }

    .image,
    .name,
    .category,
    .ingredients {
      width: 100%;
    }

    .image {
      width: fit-content;
    }

    .category {
      width: 36.4rem;
    }

    .price {
      width: 25.1rem;
    }

    div + div + label + div + div {
      align-self: self-end;
    }

    button {
      width: fit-content;
    }
  }
`;