import styled from 'styled-components'

import bgSign from '../../assets/bg-sign.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 13.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 6.3rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8rem;
    text-align: left;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 3.2rem;
    margin: 4.8rem 0;
  }

  > input {
    margin-bottom: 0.8rem;
  }

  > button {
    margin: 2.4rem 0 1.8rem;
  }
`

export const BackgroundSign = styled.div`
  flex: 1;
  background: url(${bgSign}) no-repeat center center;
  background-size: cover;
  opacity: 0.4;
`
