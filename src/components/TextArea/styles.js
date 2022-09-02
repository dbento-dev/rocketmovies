import styled from 'styled-components'

export const Container = styled.textarea`
  height: 20rem;
  width: 100%;
  border-radius: 1rem;
  padding: 1.9rem 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  resize: none;
  margin: 4rem 0 0;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`
