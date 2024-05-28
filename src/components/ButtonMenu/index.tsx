import { ButtonMenuContainer } from './style'
import { IButtonMenu } from './types'

// eslint-disable-next-line react/prop-types
const ButtonMenu = ({ onClick }: IButtonMenu) => {
  return (
    <ButtonMenuContainer onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
    </ButtonMenuContainer>
  )
}

export default ButtonMenu