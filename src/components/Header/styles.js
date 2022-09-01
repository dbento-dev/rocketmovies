import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  height: 11.6rem;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 12.3rem;
  align-items: center;
`
export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 0.9rem;
    line-height: 2.4rem;
    text-align: right;

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`

export const StTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.2rem;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.COLORS.PINK};
`

export const StInput = styled.input`
  height: 5.6rem;
  width: 63rem;
  border-radius: 1rem;
  padding: 1.9rem 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  border: none;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
`
