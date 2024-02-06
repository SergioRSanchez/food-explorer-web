import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-top: calc(114px + 11px);
  padding: 0 32px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  button svg {
    width: 22px;
    height: 22px;
  }

  button span {
    font-size: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > h1 {
    font-size: 32px;
    font-weight: 500;
    line-height: 140%;
  }

  label {
    font-family: Roboto;
    font-size: 16px;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  /* input[type=file]::-webkit-file-upload-button {
    display: none;
  } */
  input[type=file] {
    display: none;
  }

  label {
    margin-top: 8px;
  }

  label + label {
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border-radius: 8px;
    font-family: 'Roboto', sans-serif;
    height: 48px;
    width: 100%;
    cursor: pointer;
    padding: 12px 32px;

    svg {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }

  div + label + div + label {
    margin-top: 24px;
  }
`;