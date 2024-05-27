import { ButtonContainer } from './style'

// eslint-disable-next-line react/prop-types
const Button = ({ title, variant = 'primary', onClick}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
        {title}
    </ButtonContainer>
  )
}

export default Button