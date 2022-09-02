import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { BackgroundSign, Container, Form } from './styles'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input type="text" placeholder="Nome" icon={FiUser} />
        <Input type="text" placeholder="E-mail" icon={FiMail} />
        <Input type="password" placeholder="Senha" icon={FiLock} />

        <Button title="Cadastrar" />
        <ButtonText title="Voltar ao login" icon={<FiArrowLeft />} />
      </Form>
      <BackgroundSign />
    </Container>
  )
}
