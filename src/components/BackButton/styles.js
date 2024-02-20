import styled from 'styled-components';

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  span {
    font-size: 24px;
    font-weight: 500;
    line-height: 140%;
    display: flex;

    svg {
      width: 32px;
      height: 32px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    span {
      font-weight: 700;
    }
  }
`;