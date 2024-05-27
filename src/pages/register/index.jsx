import { useForm } from 'react-hook-form'
import { useMemo } from 'react'
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

import Header from '../../components/Header'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { createUser } from '../../service/api'

import {
    Column,
    Container,
    LoginText,
    Row,
    SubtitleLogin,
    Title,
    TitleLogin,
    Wrapper
} from './style'

const schema = yup.object({
    name: yup.string().min(1, 'O nome de deve conter no mínimo 1 caracter').required('O nome é obrigatório'),
    email: yup.string().email("Email informado é inválido").required('O email é obrigatório'),
    password: yup.string().min(8, 'A senha de deve conter no mínimo 8 caracteres').required('A senha é obrigatória')
})

function Register() {

    const iconColor = useMemo(() => '#8647AD', [])

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit'
    })

    const onSubmit = async formData => {
        const { success, message, error } = await createUser(formData)

        if (success) {
            navigate('/login')
        } else if (error) {
            console.log("Houve um erro para cadastrar novo usuário", error)
        } else {
            console.log(message)
        }
    }

    return (
        <>
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
                            Comece agora grátis
                        </TitleLogin>
                        <SubtitleLogin>
                            Crie sua conta e make the change._
                        </SubtitleLogin>
                        <SubtitleLogin>
                            Ao clicar em &#34;criar minha conta grátis&#34;, declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input placeholder="Nome completo" name="name" control={control} errorMessage={errors?.name?.message} lefIcon={<MdPerson color={iconColor} />} />
                            <Input placeholder="E-mail" name="email" control={control} errorMessage={errors?.email?.message} lefIcon={<MdEmail color={iconColor} />} type="email" />
                            <Input placeholder="Password" name="password" control={control} errorMessage={errors?.password?.message} lefIcon={<MdLock color={iconColor} />} type="password" />
                            <Button type="submit" title="Criar minha conta" variant='secondary' />
                        </form>
                        <Row>
                            Já tenho conta.
                            <LoginText href='/login'>
                                Fazer login
                            </LoginText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export default Register