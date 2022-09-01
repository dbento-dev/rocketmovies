import styled from 'styled-components'

export const Container = styled.span`
  font-size: 1.6rem;

  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  border-radius: 8px;
  padding: 5px 16px;
  font-family: 'Roboto', sans-serif;
`
