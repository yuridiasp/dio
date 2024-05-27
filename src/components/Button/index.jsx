import { ButtonContainer } from './style'

// eslint-disable-next-line react/prop-types
const Button = ({ title, variant = 'primary', onClick, ...rest}) => {
  return (
    <ButtonContainer {...rest} variant={variant} onClick={onClick}>
        {title}
    </ButtonContainer>
  )
}

export default Button