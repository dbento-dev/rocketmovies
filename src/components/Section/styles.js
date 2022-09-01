import styled from 'styled-components'

export const Container = styled.div`
  margin: 5.6rem 0 2.8rem;

  > h2 {
    padding-bottom: 1.6rem;
    margin-bottom: 2.4rem;

    color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-size: 2rem;

    font-weight: 400;
    line-height: 26px;
  }
`

export const StContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.6rem;
  gap: 2.4rem;
  background: ${({ theme }) => theme.COLORS.BLACK_800};
  border-radius: 8px;
`
