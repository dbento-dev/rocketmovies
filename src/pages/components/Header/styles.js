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
