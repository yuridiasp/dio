import { ButtonMenuContainer } from './style'

// eslint-disable-next-line react/prop-types
const ButtonMenu = ({ onClick }) => {
  return (
    <ButtonMenuContainer onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
    </ButtonMenuContainer>
  )
}

export default ButtonMenu