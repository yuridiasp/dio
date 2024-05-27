import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Header from '../../components/Header'
import {
  Container,
  TextContent,
  Title,
  TitleHighlight,
} from './style'

import bannerImage from "../../assets/image1.svg"

function Home() {

  const navigate = useNavigate();

  const handleClickSignIn = () => navigate('/login')

  return (
    <div>
        <Header autenticado={false} />
        <Container>
          <div>
            <Title>
              <TitleHighlight>
                Implemente
                <br />
              </TitleHighlight>
              o seu futuro global agora!
            </Title>
            <TextContent>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
            </TextContent>
            <Button title="Começar agora" variant='secondary' onClick={() => handleClickSignIn()} />
          </div>
          <div>
            <img src={bannerImage} alt="Imagem principal" />
          </div>
        </Container>
    </div>
  )
}

export default Home