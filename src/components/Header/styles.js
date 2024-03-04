import styled from 'styled-components';

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.header`
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 50;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 60px 28px 24px;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > svg {
    cursor: pointer;
  }

  div, button, p {
    display: none;
  }

  .logo-admin-mobile {
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 24px 123px;

    gap: 32px;

    div, p {
      display: flex;
    }
    button {
      display: flex;
      width: fit-content;
      gap: 8px;
      padding: 12px 16px;
    }

    > svg {
      display: none;
    }

    svg {
      cursor: pointer;
    }

    .new-meal {
      width: 216px;
    }
  }
`;