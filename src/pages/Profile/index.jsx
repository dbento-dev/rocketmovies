import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Avatar, Container, Form } from './styles'

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText icon={<FiArrowLeft />} title="Voltar" />
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/dbento-dev.png" alt="User Photo" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="Email" type="email" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}
