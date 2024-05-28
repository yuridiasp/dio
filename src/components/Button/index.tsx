import { ButtonContainer } from './style'
import { IButton } from "./types"

// eslint-disable-next-line react/prop-types
const Button = ({ title, variant = 'primary', onClick, ...rest}: IButton) => {
  return (
    <ButtonContainer {...rest} variant={variant} onClick={onClick}>
        {title}
    </ButtonContainer>
  )
}

export default Button