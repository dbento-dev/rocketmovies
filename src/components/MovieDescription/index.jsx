import { FiStar } from 'react-icons/fi'
import { Tag } from '../Tag'
import { Container, StTitle, StParagraph } from './styles'

export function MovieDescription({ rating, ...rest }) {
  return (
    <Container>
      <StTitle to="/details/id:1">Interstellar</StTitle>

      {Array.from({ length: rating }).map((_, index) => (
        <FiStar
          key={index}
          style={{ height: '12px', width: '12px' }}
          stroke="#FF859B"
          fill="#FF859B"
        />
      ))}

      <StParagraph>
        Pragas nas colheitas fizeram a civilização humana regredir para uma
        sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
        NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
        Cooper, acredita que seu quarto está assombrado por um fantasma que
        tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma
        inteligência desconhecida que está enviando mensagens codificadas
        através de radiação gravitacional, deixando coordenadas em biná.
      </StParagraph>

      <div style={{ display: 'flex', gap: '0.8rem', marginTop: '3.2rem' }}>
        <Tag title="Ficção Científica" />
        <Tag title="Drama" />
        <Tag title="Família" />
      </div>
    </Container>
  )
}
