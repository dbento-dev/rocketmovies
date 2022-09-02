import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    padding: 5rem 0;
    overflow-y: hidden;

    span {
      display: flex;
      align-items: center;
      margin: 24px 0;

      svg {
        height: 2rem;
        width: 2rem;
        stroke: #ff859b;
        fill: #ff859b;
        margin-right: 8px;
      }
    }

    #container {
      overflow-y: auto;
    }
  }
`

export const Content = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-height: 750px;
`

export const StTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: 500;
  line-height: 4.7rem;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 0.8rem;
  margin-right: 1.9rem;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  > img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  svg {
    stroke: #ff859b;
    height: 2rem;
    width: 2rem;
  }
`
export const StParagraph = styled.p`
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.9rem;
  letter-spacing: 0em;
  text-align: left;
  margin: 1.5rem 0;
  text-align: justify;

  /* overflow-y: auto; */
`
