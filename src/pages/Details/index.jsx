import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Container, Content } from './styles'
import { StHeading2 } from '../../components/commons/styles'

import { FiPlus } from 'react-icons/fi'

export default function Details() {
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
              <Button title="Voltar " />
            </div>
          </div>
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
