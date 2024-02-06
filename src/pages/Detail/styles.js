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
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  div span {
    font-size: 24px;
    font-weight: 500;
    line-height: 140%;
    display: flex;
  }

  > span svg {
    width: 32px;
    height: 32px;
  }


  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0 121px;

    section div {
      align-items: start;
    }

    div span {
      font-weight: 700;
    }

    section div + div {
      align-items: center;
    }
  }
`