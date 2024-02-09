import styled from 'styled-components';

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  min-height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;

  footer {
    position: relative;
    margin-top: 54px;
    max-width: 100vw;
    width: calc(100vw - 17px);
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
  margin-top: calc(114px + 11px);
  padding: 0 32px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  button svg {
    width: 22px;
    height: 22px;
  }

  button span {
    font-size: 16px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: calc(96px + 40px);
    padding: 0 123px;
    padding-bottom: calc(54px + 77px);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  > h1 {
    font-size: 32px;
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
    gap: 24px;
  }

  .image,
  .name,
  .category,
  .ingredients,
  .price {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  label {
    font-family: Roboto;
    font-size: 16px;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  /* input[type=file]::-webkit-file-upload-button {
    display: none;
  } */
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
    height: 48px;
    width: 100%;
    cursor: pointer;
    padding: 12px 32px;

    svg {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }

  div + label + div + label {
    margin-top: 24px;
  }

  > button {
    margin-top: 8px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 32px;

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
      gap: 32px;
      width: 100%;
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
      width: 364px;
    }

    .price {
      width: 251px;
    }

    > button {
      width: fit-content;
      align-self: flex-end;
    }
  }
`;