import { useState, useEffect } from 'react'

import Header from '../../components/Header'
import Card from '../../components/Card'
import UserInfo from '../../components/UserInfo'

import { getPosts, getRanking } from '../../service/api'

import {
  Column,
  Container,
  TitleHighlight
} from './style'

function Feed () {

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({
    userPicture: 'https://avatars.githubusercontent.com/u/81938754'
  })

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then(currentPosts => {
      if (currentPosts.length) {
        setPosts(currentPosts)
      }
    })
  }, [posts])

  const [ranking, setRanking] = useState([])

  useEffect(() => {
    getRanking().then(currentRanking => {
      if (currentRanking.length) {
        setRanking(currentRanking)
      }
    })
  }, [ranking])

  return (
    <div>
        <Header userPicture={user.userPicture} autenticado={true} />
        <Container>
          <Column flex={3}>
            {posts ? posts.map(({ userPicture, imageBackground, author, date, postTitle, postText, postTags, likes }, index) => (
              <Card key={index} userPicture={userPicture} imageBackground={imageBackground} author={author} date={date} postTitle={postTitle} postText={postText} postTags={postTags} likes={likes} />
            )) : null}
          </Column>
          <Column flex={1}>
            <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
            {ranking ? ranking.map(({ userName, userPicture, percentual }, index) => (
              <UserInfo key={index} userName={userName} userPicture={userPicture} percentual={percentual} />
            )) : null}
          </Column>
        </Container>
    </div>
  )
}

export default Feed