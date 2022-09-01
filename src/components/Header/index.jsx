import { Container, Profile, StInput, StTitle } from './styles'

export function Header() {
  return (
    <Container>
      <StTitle>RocketMovies</StTitle>
      <StInput type="text" placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <strong>David Bento</strong>
          <span>Sair</span>
        </div>
        <img src="https://github.com/dbento-dev.png" alt="User Photo" />
      </Profile>
    </Container>
  )
}
