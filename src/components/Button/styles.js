import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  padding: 12px 32px;
  border: 0;
  border-radius: 5px;

  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
`;