import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  padding: 1.2rem 3.2rem;
  border: 0;
  border-radius: .5rem;

  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: .5rem;

  svg {
    width: 2.1rem;
    height: 2.1rem;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
`;