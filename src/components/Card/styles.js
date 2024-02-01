import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  width: 210px;
  height: 292px;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  position: relative;

  > span > svg {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }

  img {
    width: 88px;
    height: 88px;
    flex-shrink: 0;
  }

  p {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;

    margin-top: 12px;
    margin-bottom: 12px;
  }

  p + p {
    margin-top: 0;
    margin-bottom: 0;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
  }

  div {
    display: flex;
    align-items: center;
    gap: 14px;

    span {
      cursor: pointer;
      display: flex;
    }
  }

  button {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    width: 162px;
    height: 32px;
  }
`;