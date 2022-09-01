import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-weight: 500;
  width: 100%;
  height: 5.6rem;
  /* margin-top: 1.6rem; */
  padding: 0 1.6rem;
  border: 0;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }

  &:disabled {
    opacity: 0.5;
  }
`
