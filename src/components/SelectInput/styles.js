import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  .react-select__menu-list,
  .react-select__option {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    border-radius: 8px;
  }

  .react-select__menu {
    background-color: transparent;
  }

  .react-select__option:hover {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  .react-select__single-value {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .react-select__indicator-separator {
    display: none;
  }
`;