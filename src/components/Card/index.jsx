import { FiThumbsUp } from 'react-icons/fi'
import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './style'

// eslint-disable-next-line react/prop-types
const Card = ({ userPicture, imageBackground, author, date, postTitle, postText, postTags, likes }) => {
    return (
        <CardContainer>
            <ImageBackground src={imageBackground} />
            <Content>
                <UserInfo>
                    <UserPicture src={userPicture} />
                    <div>
                        <h4>{author}</h4>
                        <p>{date}</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>{postTitle}</h4>
                    <p>{postText}<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>{postTags}</h4>
                    <p>
                        <FiThumbsUp /> {likes}
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export default Card