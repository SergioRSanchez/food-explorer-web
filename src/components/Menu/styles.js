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
  gap: 16px;
  font-size: 22px;

  padding: 60px 28px 24px;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > p {
    display: flex;
  }

  svg {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 36px 28px;

  button {
    display: flex;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 24px;
    line-height: 140%;
    margin-top: 36px;
    border: none;
    padding: 10px;
    width: 100%;


    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }
`;