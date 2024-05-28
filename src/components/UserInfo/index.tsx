import { IUserInfo } from './types'

import {
    Container,
    NameText,
    Progress,
    UserPicture
} from './style'

// eslint-disable-next-line react/prop-types
const UserInfo = ({ userName, userPicture, percentual = 0 }: IUserInfo) => {
    return (
        <Container>
            <UserPicture src={userPicture} />
            <div>
                <NameText>{userName}</NameText>
                <Progress percentual={percentual} />
            </div>
        </Container>
    )
}

export default UserInfo