import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 142px 108px;
    flex-direction: row;
  }
`;

export const Form = styled.form`
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;

  width: 100%;
  max-width: 576px;

  border-radius: 16px;

  > h1 {
    display: none;
  }

  div {
    margin-bottom: 32px;
  }

  > label {
    width: 100%;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > a {
    margin-top: 32px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 14px;
    font-weight: 500;
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 64px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    > h1 {
      display: block;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 32px;
      margin-bottom: 32px;
      font-weight: 500;
    }
  }

`;

export const Logo = styled.div`
  flex: .2;
  padding-top: 150px;

  background: url(${logo}) no-repeat center center;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex: 1;
  }
`;