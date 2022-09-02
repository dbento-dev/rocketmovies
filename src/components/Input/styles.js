import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin-bottom: 8px;
  border-radius: 1rem;
  padding: 0 12px;
  > input {
    width: 100%;
    height: 5.6rem;
    padding: 12px 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`
