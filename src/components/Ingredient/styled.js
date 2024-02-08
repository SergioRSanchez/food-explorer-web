import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  min-height: 32px;
  padding: 10px 16px;
  gap: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  transition: all 0.2s;

  p {
    font-family: Roboto;
    font-size: 16px;
    line-height: 100%; 
  }

  span svg {
    display: block;
    width: 14px;
    height: 14px;
    cursor: pointer;
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }
`;