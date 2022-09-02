import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  > svg {
    margin-right: 8px;
    width: 18px;
    height: 18px;
  }
`
