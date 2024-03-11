import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 60;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  footer {
    position: fixed;
    width: 100%;
    bottom: 0;
  }

  transform: translateX(-100%);
  transition: transform 0.2s ease-in-out;

  &[data-menu-is-open="true"] {
    transform: translateX(0);
  }
`;

export const Header = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  gap: 1.6rem;
  font-size: 2.2rem;

  padding: 6rem 2.8rem 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > p {
    display: flex;
  }

  svg {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 0 2..8rem;
  margin-top: 3.6rem;

  button {
    display: flex;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2.4rem;
    line-height: 140%;
    margin-top: 3.6rem;
    border: none;
    padding: 1rem;
    width: 100%;


    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }
`;