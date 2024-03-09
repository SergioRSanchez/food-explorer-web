import styled from 'styled-components';

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.footer`
  margin: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 2.4rem 2.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  font-size: 1rem;

  span {
    text-align: center;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 1.2rem;
    margin-top: 4.9rem;
    padding: 2.4rem 12.4rem;
  }
`;