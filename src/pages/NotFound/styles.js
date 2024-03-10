import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_600};
  }

  a {
    text-decoration: none;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;