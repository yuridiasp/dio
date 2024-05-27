import { useNavigate } from 'react-router-dom'
import { MdEmail, MdLock } from 'react-icons/md'

import Button from '../../components/Button'
import Header from '../../components/Header'
import Input from '../../components/Input'
import {
  Column,
  Container,
  CreateText,
  ForgotText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper
} from './style'

function Login() {

  const iconColor = '#8647AD'

  const navigate = useNavigate();

  const handleClickSignIn = () => navigate('/feed')

  return (
    <div>
        <Header autenticado={false} />
        <Container>
          <Column>
            <Title>
              A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
          </Column>
          <Column>
            <Wrapper>
              <TitleLogin>
                Faça seu cadastro
              </TitleLogin>
              <SubtitleLogin>
                Faça seu login e make the change._
              </SubtitleLogin>
              <form>
                <Input lefIcon={<MdEmail color={iconColor} />} placeholder="E-mail" />
                <Input lefIcon={<MdLock color={iconColor} />} placeholder="Password" />
                <Button title="Entrar" variant='secondary' onClick={() => handleClickSignIn()} type="button" />
              </form>
              <Row>
                <ForgotText>Esqueci minha senha</ForgotText>
                <CreateText>Criar Conta</CreateText>
              </Row>
            </Wrapper>
          </Column>
        </Container>
    </div>
  )
}

export default Login