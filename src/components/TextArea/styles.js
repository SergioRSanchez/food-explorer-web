import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  height: 17.2re,;

  border-radius: .8rem;
  padding: 1.2rem 1.4rem;

  textarea {
    resize: none;
    width: 100%;
    height: 17.2rem;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-family: Roboto;
    font-size: 1.6rem;
    line-height: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;