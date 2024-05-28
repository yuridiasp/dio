import { useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import { MdEmail, MdLock } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useContext } from "react"

import { IFormData } from './types'
import Button from '../../components/Button'
import Header from '../../components/Header'
import Input from '../../components/Input'
import { AuthContext } from '../../context/auth'

import {
  Column,
  Container,
  CreateText,
  ForgotText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from './style'
import { useAuth } from '../../hooks/useAuth'

const schema = yup.object({
  email: yup.string().email('E-mail informado não é válido').required('Campo obrigatório'),
  password: yup.string().min(4, 'No mínimo 4 caracteres').required('Campo obrigatório'),
}).required()

function Login() {

  const iconColor = useMemo(() => '#8647AD', [])

  const  { handleLogin } = useAuth()

  const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onSubmit'
  })
  
  const onSubmit = async (formData: IFormData) => {
    handleLogin(formData)
  }

  return (
    <div>
        <Header />
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
              <form onSubmit={handleSubmit(onSubmit)} >
                <Input control={control} errorMessage={errors?.email?.message} name={"email"} lefIcon={<MdEmail color={iconColor} />} type='email' placeholder="E-mail"/>
                <Input control={control} errorMessage={errors?.password?.message} name={"password"} lefIcon={<MdLock color={iconColor} />} type='password' placeholder="Password" />
                <Button title="Entrar" variant='secondary' />
              </form>
              <Row>
                <ForgotText href='#' >Esqueci minha senha</ForgotText>
                <CreateText href='/register' >Criar Conta</CreateText>
              </Row>
            </Wrapper>
          </Column>
        </Container>
    </div>
  )
}

export default Login