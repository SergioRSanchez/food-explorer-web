import styled from 'styled-components';

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-top: calc(11.4rem + 1.6rem + 2.1rem);
  margin-bottom: calc(5.4rem + 7.7rem);
  padding: 0 5.6rem;

  div {
    align-items: center;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0 12.1rem;

    section div {
      align-items: start;
    }

    section div + div {
      align-items: center;
    }
  }
`