import { useNavigate } from 'react-router-dom'
import { MdKeyboardArrowDown } from 'react-icons/md'

import {
    BuscarInputContainer,
    Container,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper,
    Input,
    ContainerMenuRight,
} from './style'

import Button from '../Button'
import ButtonMenu from '../ButtonMenu'
import logo from "../../assets/logodio.svg"

// eslint-disable-next-line react/prop-types
function Header({ autenticado, userPicture }) {

    const navigate = useNavigate();

    const handleClickHome = () => navigate('/')

    const handleClickSignin = () => navigate('/login')

    const handleClickRegister = () => navigate('/register')

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} onClick={() => handleClickHome()} />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ): null}
                </Row>
                <Row>
                    {autenticado ? (
                        <>
                            <UserPicture src={userPicture} />
                            <MdKeyboardArrowDown color='#FFFFFF' />
                        </>
                    ) : (
                        <>
                            <ButtonMenu />
                            <ContainerMenuRight>
                                <MenuRight href='/'>Home</MenuRight>
                                <Button onClick={() => handleClickSignin()} title="Entrar" />
                                <Button onClick={() => handleClickRegister()} title="Cadastrar" />
                            </ContainerMenuRight>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Header