import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 264px;
    height: 264px;
  }
`;

export const Content = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 316px;

  p {
    font-size: 27.041px;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  p + p {
    text-align: center;
    font-size: 16.225px;
    font-weight: 400;
    line-height: 140%;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
  }

  div span {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;

    padding: 4px 8px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }
`;

export const Order = styled.div``;