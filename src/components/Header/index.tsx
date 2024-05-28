import { Link } from 'react-router-dom'
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
import { useAuth } from '../../hooks/useAuth'

function Header() {

    const  { user, handleSignOut } = useAuth()

    return (
        <Wrapper>
            <Container>
                <Row>
                    <Link to='/'>
                        <img src={logo} />
                    </Link>
                    {user.id ? (
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
                    {user.id ? (
                        <>
                            <UserPicture src={user.userPicture} />
                            <a href="/" onClick={handleSignOut}>
                                <MdKeyboardArrowDown color='#FFFFFF' />
                            </a>
                        </>
                    ) : (
                        <>
                            <ButtonMenu />
                            <ContainerMenuRight>
                                <MenuRight href='/'>Home</MenuRight>
                                <Link to='/login'>
                                    <Button title="Entrar" />
                                </Link>
                                <Link to='/register'>
                                    <Button title="Cadastrar" />
                                </Link>
                            </ContainerMenuRight>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Header