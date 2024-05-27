import { useNavigate } from 'react-router-dom'

import Header from '../../components/Header'
import Card from '../../components/Card'
import UserInfo from '../../components/UserInfo'
import {
  Column,
  Container,
  Title,
  TitleHighlight
} from './style'

import { useState } from 'react'

import cover from '../../assets/Rectangle 6.png'

function Feed () {

  const [user, setUser] = useState({
    userPicture: 'https://avatars.githubusercontent.com/u/81938754'
  })

  const [posts, setPosts] = useState([
    {
      userPicture: 'https://avatars.githubusercontent.com/u/81938754',
      imageBackground: cover,
      author: 'Yuri Dias',
      date: 'Há 8 minutos',
      postTitle: 'Projeto para cusro de HTML e CSS',
      postText: 'Projeto feito no curso de HTML e CSS no bootcamp DIO do Global Avanade...',
      postTags: '#HTML #CSS #Javascript',
      likes: 10
    },
    {
      userPicture: 'https://avatars.githubusercontent.com/u/81938754',
      imageBackground: cover,
      author: 'Yuri Dias',
      date: 'Há 8 minutos',
      postTitle: 'Projeto para cusro de HTML e CSS',
      postText: 'Projeto feito no curso de HTML e CSS no bootcamp DIO do Global Avanade...',
      postTags: '#HTML #CSS #Javascript',
      likes: 10
    },
    {
      userPicture: 'https://avatars.githubusercontent.com/u/81938754',
      imageBackground: cover,
      author: 'Yuri Dias',
      date: 'Há 8 minutos',
      postTitle: 'Projeto para cusro de HTML e CSS',
      postText: 'Projeto feito no curso de HTML e CSS no bootcamp DIO do Global Avanade...',
      postTags: '#HTML #CSS #Javascript',
      likes: 10
    },
    {
      userPicture: 'https://avatars.githubusercontent.com/u/81938754',
      imageBackground: cover,
      author: 'Yuri Dias',
      date: 'Há 8 minutos',
      postTitle: 'Projeto para cusro de HTML e CSS',
      postText: 'Projeto feito no curso de HTML e CSS no bootcamp DIO do Global Avanade...',
      postTags: '#HTML #CSS #Javascript',
      likes: 10
    },
    {
      userPicture: 'https://avatars.githubusercontent.com/u/81938754',
      imageBackground: cover,
      author: 'Yuri Dias',
      date: 'Há 8 minutos',
      postTitle: 'Projeto para cusro de HTML e CSS',
      postText: 'Projeto feito no curso de HTML e CSS no bootcamp DIO do Global Avanade...',
      postTags: '#HTML #CSS #Javascript',
      likes: 10
    },
    {
      userPicture: 'https://avatars.githubusercontent.com/u/81938754',
      imageBackground: cover,
      author: 'Yuri Dias',
      date: 'Há 8 minutos',
      postTitle: 'Projeto para cusro de HTML e CSS',
      postText: 'Projeto feito no curso de HTML e CSS no bootcamp DIO do Global Avanade...',
      postTags: '#HTML #CSS #Javascript',
      likes: 10
    },
    {
      userPicture: 'https://avatars.githubusercontent.com/u/81938754',
      imageBackground: cover,
      author: 'Yuri Dias',
      date: 'Há 8 minutos',
      postTitle: 'Projeto para cusro de HTML e CSS',
      postText: 'Projeto feito no curso de HTML e CSS no bootcamp DIO do Global Avanade...',
      postTags: '#HTML #CSS #Javascript',
      likes: 10
    },
  ])

  const [ranking, setRanking] = useState([
    {
      userName: 'Yuri Dias',
      userPicture: 'https://avatars.githubusercontent.com/u/81938754',
      percentual: 80
    },
    {
      userName: 'Yuri Dias',
      userPicture: 'https://avatars.githubusercontent.com/u/81938754',
      percentual: 5
    },
    {
      userName: 'Yuri Dias',
      userPicture: 'https://avatars.githubusercontent.com/u/81938754',
      percentual: 17
    },
    {
      userName: 'Yuri Dias',
      userPicture: 'https://avatars.githubusercontent.com/u/81938754',
      percentual: 57
    },
    {
      userName: 'Yuri Dias',
      userPicture: 'https://avatars.githubusercontent.com/u/81938754',
      percentual: 90
    },
  ])

  return (
    <div>
        <Header userPicture={user.userPicture} autenticado={true} />
        <Container>
          <Column flex={3}>
            {posts.map(({ userPicture, imageBackground, author, date, postTitle, postText, postTags, likes }, index) => (
              <Card key={index} userPicture={userPicture} imageBackground={imageBackground} author={author} date={date} postTitle={postTitle} postText={postText} postTags={postTags} likes={likes} />
            ))}
          </Column>
          <Column flex={1}>
            <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
            {ranking.map(({ userName, userPicture, percentual }, index) => (
              <UserInfo key={index} userName={userName} userPicture={userPicture} percentual={percentual} />
            ))}
          </Column>
        </Container>
    </div>
  )
}

export default Feed