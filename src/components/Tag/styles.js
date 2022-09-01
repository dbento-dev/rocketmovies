import styled from 'styled-components'

export const Container = styled.span`
  height: 5.6rem;
  font-size: 1.6rem;
  padding: 0.5rem 1.4rem;

  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  line-height: 1.9rem;
  letter-spacing: 0em;
  text-align: left;
`
