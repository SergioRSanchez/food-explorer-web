import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  font-family: Roboto;

  a {
    font-family: Poppins;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 14.2rem 10.8rem;
    flex-direction: row;
  }
`;

export const Form = styled.form`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;

  width: 100%;
  max-width: 57.6rem;

  border-radius: 1.6rem;

  > h1 {
    display: none;
    font-family: Poppins;
  }

  div {
    margin-bottom: 3.2rem;
  }

  > label {
    width: 100%;
    margin-bottom: .8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > a {
    margin-top: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    font-weight: 500;
  }

  div:nth-child(7) svg {
    cursor: pointer;
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 6.4rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    > h1 {
      display: block;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 3.2rem;
      margin-bottom: 3.2rem;
      font-weight: 500;
    }
  }
`;

export const Logo = styled.div`
  flex: .2;
  padding-top: 15rem;

  background: url(${logo}) no-repeat center center;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex: 1;
  }
`;