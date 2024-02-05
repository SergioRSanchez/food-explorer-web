import styled from 'styled-components';

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-top: calc(114px + 16px + 21px);
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
    margin-top: calc(114px + 164px);
  }
`