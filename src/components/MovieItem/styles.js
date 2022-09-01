import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.GRAY_900};
  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.GRAY_400 : theme.COLORS.WHITE};
  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_900}` : 'none'};
  border-radius: 10px;
  padding: 0 16px;
  margin: 0;

  > input {
    height: 56px;
    width: 100%;
    color: ${({ theme, isNew }) =>
      isNew ? theme.COLORS.GRAY_400 : theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
