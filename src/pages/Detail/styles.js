import styled from 'styled-components';

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-top: calc(114px + 16px + 21px);
  margin-bottom: calc(54px + 77px);
  padding: 0 56px;

  div {
    align-items: center;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0 121px;

    section div {
      align-items: start;
    }

    section div + div {
      align-items: center;
    }
  }
`