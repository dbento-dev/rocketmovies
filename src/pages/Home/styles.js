import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
`

export const StNewMovieButton = styled(Link)`
  background-color: ${({ theme, isCancelBtn }) =>
    isCancelBtn ? theme.COLORS.BLACK_900 : theme.COLORS.PINK};
  color: ${({ theme, isCancelBtn }) =>
    isCancelBtn ? theme.COLORS.PINK : theme.COLORS.GRAY_600};
  font-weight: 500;
  width: 100%;
  height: 5.6rem;
  padding: 0 1.6rem;
  border: 0;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }

  &:disabled {
    opacity: 0.5;
  }
`
