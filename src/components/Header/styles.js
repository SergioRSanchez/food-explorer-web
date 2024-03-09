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

  padding: 6rem 2.8rem 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > svg {
    cursor: pointer;
  }

  div, button, p {
    display: none;
  }

  .logo-admin-mobile {
    position: absolute;
    top: 7rem;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .menu {
    z-index: 100;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 2.4rem 12.3rem;

    gap: 3.2rem;

    div, p {
      display: flex;
    }
    button {
      display: flex;
      width: fit-content;
      gap: .8rem;
      padding: 1.2rem 1.6rem;
    }

    > svg {
      display: none;
    }

    svg {
      cursor: pointer;
    }

    .new-meal {
      width: 21.6rem;
    }
  }
`;