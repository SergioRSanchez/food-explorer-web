import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  height: 172px;

  border-radius: 8px;
  padding: 12px 14px;

  textarea {
    resize: none;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-family: Roboto;
    font-size: 16px;
    line-height: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;