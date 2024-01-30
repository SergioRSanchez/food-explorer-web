import styled from 'styled-components';
import logo from '../../assets/logo.png';

export const Container = styled.div`
  height: 100vh;

  padding: 142px 108px;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 64px;
  flex: 1;

  width: 100%;
  max-width: 576px;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  border-radius: 16px;


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 32px;
    margin-bottom: 32px;
    font-weight: 500;
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
`;

export const Logo = styled.div`
  flex: 1;
  background: url(${logo}) no-repeat center center;
`;