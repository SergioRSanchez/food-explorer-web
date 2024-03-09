import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  min-height: 3.2rem;
  padding: 1rem 1.6rem;
  gap: .8rem;
  border-radius: .8rem;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  transition: all 0.2s;

  p {
    font-family: Roboto;
    font-size: 1.6rem;
    line-height: 100%;
    word-break: break-all;
  }

  span svg {
    display: block;
    width: 1.4rem;
    height: 1.4rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  span svg:hover {
    scale: 1.2;
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }
`;