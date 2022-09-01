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
  }
`

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 1.2rem;

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
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

export const StContainerMovies = styled.div`
  overflow-y: auto;
  margin-top: 32px;
  display: grid;
  gap: 24px;

  /* Works on Firefox */

  scrollbar-width: thin;
  scrollbar-color: blue orange;

  /* Works on Chrome, Edge, and Safari */
  -webkit-scrollbar {
    width: 12px;
  }

  -webkit-scrollbar-track {
    background: orange;
  }

  -webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 20px;
    border: 3px solid orange;
  }
`
