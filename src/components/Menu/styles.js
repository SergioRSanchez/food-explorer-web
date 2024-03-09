import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  top: 0;
  z-index: 60;
`;

export const Header = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  gap: 1..6rem;
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
  padding: 3.6rem 2..8rem;

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