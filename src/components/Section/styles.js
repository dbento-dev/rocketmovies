import styled from 'styled-components'

export const Container = styled.section`
  margin: 5.6rem 0 2.8rem;

  > h2 {
    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-size: 2rem;
    font-weight: 400;
    line-height: 26px;
  }
`
