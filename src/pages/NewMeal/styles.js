import styled from 'styled-components';

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  footer {
    position: relative;
    margin-top: 54px;
    max-width: 100vw;
    width: calc(100vw - 17px);
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: 0;
  }
`;

export const Content = styled.div`
  margin-top: calc(114px + 11px);
  /* margin-bottom: calc(54px + 77px); */
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
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > h1 {
    font-size: 32px;
    font-weight: 500;
    line-height: 140%;
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
  input[type=file] {
    display: none;
  }

  input[type=number]::-webkit-inner-spin-button {
    display: none;
  }

  label {
    margin-top: 8px;
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
`;