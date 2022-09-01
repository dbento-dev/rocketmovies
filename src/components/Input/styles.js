import styled from 'styled-components'

export const StInput = styled.input`
  height: 5.6rem;
  width: 100%;
  border-radius: 1rem;
  padding: 1.9rem 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  border: none;
  color: ${({ theme }) => theme.COLORS.GRAY_400};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`
