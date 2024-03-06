import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;

  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  border-radius: 8px;

  display: inline-flex;
  min-height: 48px;
  padding: 8px;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;

  button span svg {
    width: 14px;
    height: 14px;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  font-family: Roboto;
  font-size: 16px;
  line-height: 100%;
  height: 32px;
  padding: 10px 16px;
  gap: 8px;
  border-radius: 8px;
  border: none;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%237C7C8AFF' stroke-width='2' stroke-dasharray='6' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  span svg {
    width: 14px;
    height: 14px;
    cursor: pointer;
  }

  &:hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='white' stroke-width='2' stroke-dasharray='6' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
    border-radius: 8px;
  }
`;

export const InputContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='white' stroke-width='2' stroke-dasharray='6' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: Roboto;
  font-size: 16px;
  line-height: 100%;
  height: 32px;
  padding: 10px 16px;
  border-radius: 8px;
  gap: 8px;

  svg {
    width: 14px;
    height: 14px;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 100px;
  font-family: Roboto;
  font-size: 16px;
  line-height: 100%;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;