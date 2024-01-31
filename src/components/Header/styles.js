import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 60px 28px 24px;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > svg {
    cursor: pointer;
  }

  div, button, svg:last-child {
    display: none;
  }

  //  PARA ADMINISTRADOR MOBILE
  /* > img + svg {
    display: none;
  } */

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 24px 123px;

    gap: 32px;

    div, svg:last-child {
      display: flex;
    }
    button {
      display: flex;
      width: fit-content;
      gap: 8px;
    }

    > svg {
      display: none;
    }
  }
`;