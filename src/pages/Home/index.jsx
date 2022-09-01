import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Container, Content, StContainerMovies } from './styles'
import { StHeading2 } from '../../components/commons/styles'

import { FiPlus } from 'react-icons/fi'
import { MovieDescription } from '../../components/MovieDescription'

export default function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <StHeading2>Meus Filmes</StHeading2>
            <div
              style={{
                width: '207px',
              }}
            >
              <Button title="Adicionar Filme" icon={<FiPlus />} />
            </div>
          </div>
          <StContainerMovies>
            <MovieDescription rating={5}></MovieDescription>
            <MovieDescription rating={5}></MovieDescription>
            <MovieDescription rating={5}></MovieDescription>
            {/* <MovieDescription rating={5}></MovieDescription> */}
          </StContainerMovies>
        </Content>
        {/* <ButtonText title="Voltar" /> */}
        {/* <Section title="Marcadores">
        <Tag title="React" />
        <Tag title="TypeScript" />
      </Section> */}
      </main>
    </Container>
  )
}
