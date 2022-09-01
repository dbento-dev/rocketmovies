import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Container } from './styles'

export default function Details() {
  return (
    <Container>
      <Header />

      <Section title="Marcadores">
        <Tag title="React" />
        <Tag title="TypeScript" />
      </Section>
      <Button title="Voltar " />
    </Container>
  )
}
