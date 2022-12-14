import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;

  grid-template-rows: 10.5rem auto;

  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 0;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme.COLORS.BLACK_900};
    padding: 16px 0;
  }
`
export const Form = styled.form`
  max-width: 110rem;

  margin: 3.8rem auto;

  > header {
    h1 {
      margin: 2.4rem 0 4rem;
    }
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
