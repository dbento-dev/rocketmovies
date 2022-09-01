import { Container } from './styled'

export function ButtonText({ title, icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {icon} {title}
    </Container>
  )
}
