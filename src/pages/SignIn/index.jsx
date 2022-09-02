import { FiLock, FiMail } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { BackgroundSign, Container, Form } from './styles'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input type="text" placeholder="E-mail" icon={FiMail} />
        <Input type="password" placeholder="Senha" icon={FiLock} />

        <Button title="Entrar" />
        <ButtonText title="Criar conta" />
      </Form>
      <BackgroundSign />
    </Container>
  )
}
