import styled from 'styled-components';

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.footer`
  margin: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 24px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  font-size: 10px;

  span {
    text-align: center;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 12px;
    margin-top: 49px;
    padding: 24px 124px;
  }
`;