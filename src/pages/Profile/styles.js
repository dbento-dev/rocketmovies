import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    display: flex;
    align-items: center;
    padding: 0 12.4rem;

    > a {
      margin: 2.4rem 0 1.8rem;
      display: flex;
      color: ${({ theme }) => theme.COLORS.PINK};
      background: none;
      font-size: 1.6rem;
      align-items: center;
      border: none;
      > svg {
        margin-right: 8px;
        width: 18px;
        height: 18px;
      }
    }
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }

  > button {
    margin-top: 2.4rem;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 3.2rem;
  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }
`
