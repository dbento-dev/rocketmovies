import { Container, Profile } from './styles'

export function Header() {
  return (
    <Container>
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
