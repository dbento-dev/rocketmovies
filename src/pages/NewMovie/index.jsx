import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { MovieItem } from '../../components/MovieItem'
import { Section } from '../../components/Section'
// import { Tag } from '../../components/Tag'
import { TextArea } from '../../components/TextArea'
import { Container, Form } from './styles'

export function NewMovie() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <a href="/">Voltar</a>
            <h1>Novo filme</h1>
          </header>
          <div style={{ display: 'flex', gap: '4rem' }}>
            <Input type="text" placeholder="Título" />
            <Input type="number" placeholder="Sua nota (de 0 a 5)" />
          </div>
          <TextArea placeholder="Observações" />
          <Section title="Marcadores">
            <div className="tags">
              <MovieItem value="React" />
              <MovieItem value="Node" />
              <MovieItem value="TypeScript" />
              <MovieItem value="HTML" />

              <MovieItem placeholder="Novo marcador" isNew />
            </div>
          </Section>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Button title="Cancelar" />
            <Button title="Salvar" />
          </div>
        </Form>
      </main>
    </Container>
  )
}
